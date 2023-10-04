import Login from ".";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn().mockResolvedValue({
    json: async () => ({ data: { token: "tokenNumber" } }),
});

describe("Testing login container", () => {
    test("Submit login form and set token in sessionStorage", async () => {
        const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
        render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
        );

        const emailInput = screen.getByPlaceholderText("Your email");
        const passwordInput = screen.getByPlaceholderText("Your password");
        const loginButton = screen.getByText("Login");

        fireEvent.change(emailInput, { target: { value: "user@gmail.com" } });
        fireEvent.change(passwordInput, { target: { value: "User24@awesome" } });
        fireEvent.click(loginButton);

        await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
            "https://mock-api.arikmpt.com/api/user/login",
            expect.any(Object)
        );
        expect(mockSetItem).toHaveBeenCalledWith("token", "tokenNumber");
        });
    });
});
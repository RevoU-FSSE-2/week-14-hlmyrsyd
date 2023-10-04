import Register from ".";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue({ message: "Registration successful" }),
    });

    describe("Testing register container", () => {
    test("Submit register form success", async () => {
        render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
        );

        const nameInput = screen.getByPlaceholderText("Your name");
        const emailInput = screen.getByPlaceholderText("Your email");
        const passwordInput = screen.getByPlaceholderText("Your password");
        const registerButton = screen.getByText("Register");

        fireEvent.change(nameInput, { target: { value: "User" } });
        fireEvent.change(emailInput, { target: { value: "user@gmail.com" } });
        fireEvent.change(passwordInput, { target: { value: "User24@awesome" } });
        fireEvent.click(registerButton);

        await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
            "https://mock-api.arikmpt.com/api/user/register",
            expect.objectContaining({
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "User",
                email: "user@gmail.com",
                password: "User24@awesome",
            }),
            })
        );
        });
    });
});
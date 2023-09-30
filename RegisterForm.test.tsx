import { render } from "@testing-library/react";
import RegisterForm from ".";
import { MemoryRouter } from "react-router-dom"; // Used MemoryRouter to wrap <LoginForm/> because i used useNavigate in LoginForm

describe("test register form", () => {
    const mockProps = () => {};
    it("title render correctly", async () => {
        render(
        <MemoryRouter>
            <RegisterForm onSubmit={mockProps} />
        </MemoryRouter>
        );
    });
});
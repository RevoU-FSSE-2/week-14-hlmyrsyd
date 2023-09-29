import { render } from "@testing-library/react";
import LoginForm from ".";
import { MemoryRouter } from "react-router-dom"; // Used MemoryRouter to wrap <LoginForm/> because i used useNavigate in LoginForm

describe("test login form", () => {
    const mockProps = () => {};
    it("title render correctly", async () => {
        render(
        <MemoryRouter>
            <LoginForm onSubmit={mockProps} />
        </MemoryRouter>
        );
    });
});
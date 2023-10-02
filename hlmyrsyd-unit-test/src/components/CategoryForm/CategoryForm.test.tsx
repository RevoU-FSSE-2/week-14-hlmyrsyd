import { render } from "@testing-library/react";
import CategoryForm from ".";
import { MemoryRouter } from "react-router-dom"; // Used MemoryRouter to wrap <LoginForm/> because i used useNavigate in LoginForm

describe("test Category form", () => {
    const mockProps = () => {};
    it("title render correctly", async () => {
        render(
        <MemoryRouter>
            <CategoryForm onSubmit={mockProps} />
        </MemoryRouter>
        );
    });
});
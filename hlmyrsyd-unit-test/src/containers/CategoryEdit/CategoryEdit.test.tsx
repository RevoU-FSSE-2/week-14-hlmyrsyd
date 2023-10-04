import CategoryEdit from ".";
import { render, waitFor, screen } from "@testing-library/react";
import {
    MemoryRouter,
    Routes,
    Route,
    useParams,
    useNavigate,
} from "react-router-dom";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
    useParams: jest.fn(),
    }));

    global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve({ id: "01", name: "Hilmy", is_active: true }),
    });

    describe("Testing category edit container", () => {
    test("Render category edit render and updates category", async () => {
        const id = "01";
        (useParams as jest.Mock).mockReturnValue({ id: id });

        const navigateMock = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(navigateMock);

        render(
        <MemoryRouter initialEntries={[`/category/edit/${id}`]}>
            <Routes>
            <Route path="/category/edit/:id" element={<CategoryEdit />} />
            </Routes>
        </MemoryRouter>
        );

        await waitFor(() => screen.getByDisplayValue("Hilmy"));
    });
});
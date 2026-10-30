import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

vi.mock("../CartButton/CartButton.jsx", () => ({
    default: () => <div>Fake CartButton</div>
}));

describe("App Component – header section", () => {
    it("renders the logo and the bag/cart icon", () => {
        // arrange
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        // assert
        const logo = screen.getByRole("img", {name: /logo-campus-escape/i});
        const cartIcon = screen.getByText(/Fake CartButton/i);
        expect(logo).toBeInTheDocument();
        expect(cartIcon).toBeInTheDocument();
    });
});
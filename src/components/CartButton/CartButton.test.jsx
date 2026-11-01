import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CartButton from "./CartButton.jsx";
import { createMemoryRouter, MemoryRouter, RouterProvider } from "react-router";
import routes from "../../routes.jsx";
import userEvent from "@testing-library/user-event";

describe("CartButton Component", () => {
    it("renders the cart-icon, placeCount, and cart-icon title", () => {
        // arrange
        render(
            <MemoryRouter>
                <CartButton placeCount={3}></CartButton>
            </MemoryRouter>  
        );
        
        // assert
        const icon = screen.getByRole("img", {name: "cart-icon"});
        const title = screen.getByText("My Weekend");
        const placeCount = screen.getByText("3");
        expect(icon).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(placeCount).toBeInTheDocument();
        expect(screen.queryByText("1")).not.toBeInTheDocument();
    });

    it("navigates to the /weekend-plan route, on click", async () => {
        // arrange
        const router = createMemoryRouter(routes);
        render(<RouterProvider router={router} />);
        const user = userEvent.setup();
        const cartLinks = screen.getAllByRole("link", {name: /My weekend/i});

        // act and assert
        for (const link of cartLinks) {
            await user.click(link);
            expect(router.state.location.pathname).toBe("/weekend-plan");
        }
    });
});
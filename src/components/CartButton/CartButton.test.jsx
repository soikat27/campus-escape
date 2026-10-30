import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CartButton from "./CartButton.jsx";
import { MemoryRouter } from "react-router";

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
});
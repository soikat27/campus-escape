import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Item from "./Item.jsx";
import userEvent from "@testing-library/user-event";

describe("Place details", () => {
    it("renders place details when available", () => {
        // arrange
        render(
            <Item
                name="demo-name"
                address="demo-address"
                category={["demo-category-1", "demo-category-1"]}
                website="www.github.com/soikat27"
                phone="+1 000 111 2222"
                openingHours="demo-hours"
            />
        );
        const name = screen.getByRole("heading", {level: 4});
        const address = screen.getByText(/demo-address/i);
        const phone = screen.getByText(/1 000 111 2222/i);
        const openingHours =  screen.getByText(/demo-hours/i);

        // act

        // assert
        expect(name.textContent).toMatch(/demo-name/i);
        expect(address).toBeInTheDocument();
        expect(phone).toBeInTheDocument();
        expect(openingHours).toBeInTheDocument();
    });

    it("renders place details when unavailable", () => {
        // arrange
        render(
            <Item name="demo-name" />
        );
        const name = screen.getByRole("heading", {level: 4});
        const address = screen.queryByText(/demo-address/i);
        const unavailable = screen.getByText(/address unavailable/i);

        // act

        // assert
        expect(name.textContent).toMatch(/demo-name/i);
        expect(address).not.toBeInTheDocument();
        expect(unavailable).toBeInTheDocument();
    });
});

describe("website behaves correctly", () => {
    it("renders with corrent website address", () => {
        // arrange
        render(
            <Item 
                name="demo-name"
                website="http://www.github.com/soikat27"
            />
        );
        
        const website = screen.getByRole("link", {
            name: "http://www.github.com/soikat27"
        });

        // act

        // assert
        expect(website).toHaveAttribute("href", "http://www.github.com/soikat27");
    });
});

describe("group size behavior", () => {
    it("renders group size input, buttons appear and behave as expected", async () => {
        // arrange
        render(
            <Item name="demo-name" />
        );
        
        const groupSizeInput = screen.getByRole("spinbutton", {name: /group size/i});
        const minusButton = screen.queryByRole("button", {name: /-/i});
        const plusButton = screen.getByRole("button", {name: /\+/i});
        const user = userEvent.setup();
        // act-1

        // assert
        expect(groupSizeInput).toHaveValue(1);
        expect(minusButton).not.toBeInTheDocument();
        expect(plusButton).toBeInTheDocument();
        
        // act-2
        await user.click(plusButton);

        // assert
        expect(groupSizeInput).toHaveValue(2);
        const minusButtonAppeared = screen.getByRole("button", {name: /-/i});
        expect(minusButtonAppeared).toBeInTheDocument();

        // act-3
        await user.click(minusButtonAppeared);

        // assert
        expect(groupSizeInput).toHaveValue(1);

        // act-4
        await user.clear(groupSizeInput);

        // assert
        expect(groupSizeInput.value).toBe("");

        // act-5
        await user.tab();

        // assert
        expect(groupSizeInput).toHaveValue(1);

        // act-6
        await user.clear(groupSizeInput);
        await user.type(groupSizeInput, "10");
        await user.tab();

        // assert
        expect(groupSizeInput).toHaveValue(10);
    });
});

describe("Add to My Weekend button behavior", () => {
    it("renders add place button and on click behaves correctly – invokes the function", async () => {
        // arrange
        const updatePlaceCount = vi.fn();
        render(
            <Item 
                name="demo-name"
                updatePlaceCount={updatePlaceCount}
            />
        );
        const user = userEvent.setup();
        const addPlaceBtn = screen.getByRole("button", {name: /add to my weekend/i});

        // act
        await user.click(addPlaceBtn);

        // assert
        expect(updatePlaceCount).toHaveBeenCalled();
    });
});

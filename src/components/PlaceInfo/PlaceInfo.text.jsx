import { render, screen } from "@testing-library/react";
import { describe, expect, it} from "vitest";
import PlaceInfo from "./PlaceInfo.jsx";

describe("Place details", () => {
    it("renders place details when available", () => {
        // arrange
        render(
            <PlaceInfo
                name="demo-name"
                address="demo-address"
                category={["demo-category-1", "demo-category-2"]}
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
            <PlaceInfo name="demo-name" />
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
            <PlaceInfo 
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
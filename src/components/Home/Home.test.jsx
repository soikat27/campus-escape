import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./Home.jsx";
import { MemoryRouter } from "react-router";

describe("Intro section", () => {
    it("renders the heading", () => {
        // arrange
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        const heading = screen.getByRole("heading", {
            level: 1
        });

        // assert
        expect(heading).toBeInTheDocument();
    });

    it("renders travel-photo bg image", () => {
        // arrange
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        const image = screen.getByRole("img", {
            name: /Friends traveling together/i
        })

        // assert
        expect(image).toBeInTheDocument();
    });
});

describe("Bridge section", () => {
    it("renders the heading", () => {
        // arrange
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        const heading = screen.getByRole("heading", {
            level: 2,
            name: /Find your kind of escape below/i
        });

        // assert
        expect(heading).toBeInTheDocument();
    });
});
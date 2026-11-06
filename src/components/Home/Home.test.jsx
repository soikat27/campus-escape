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

    describe("caterogies section", () => {
        it("renders 'restaurants' article parts", () => {
            // arrange
            render(
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            );
            const heading = screen.getByRole("heading", {
               level: 3,
               name: /restaurants/i 
            });
            const button = screen.getByRole("link", {
                name: /Explore restaurants/i
            });

            // act


            // assert
            expect(heading).toBeInTheDocument();
            expect(button).toBeInTheDocument();
        });

        it("renders 'Museums & Cinema' article parts", () => {
            // arrange
            render(
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            );
            const heading = screen.getByRole("heading", {
               level: 3,
               name: /Museums & Cinema/i 
            });
            const button = screen.getByRole("link", {
                name: /Explore Museums & Cinema/i
            });

            // act


            // assert
            expect(heading).toBeInTheDocument();
            expect(button).toBeInTheDocument();
        });

        it("renders 'Gift & Souvenir Shops' article parts", () => {
            // arrange
            render(
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            );
            const heading = screen.getByRole("heading", {
               level: 3,
               name: /Gift & Souvenir Shops/i 
            });
            const button = screen.getByRole("link", {
                name: /Explore Shops/i
            });

            // act


            // assert
            expect(heading).toBeInTheDocument();
            expect(button).toBeInTheDocument();
        });

        it("renders 'Parks & Playgrounds' article parts", () => {
            // arrange
            render(
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            );
            const heading = screen.getByRole("heading", {
               level: 3,
               name: /Parks & Playgrounds/i 
            });
            const button = screen.getByRole("link", {
                name: /Explore Parks/i
            });

            // act


            // assert
            expect(heading).toBeInTheDocument();
            expect(button).toBeInTheDocument();
        });

        it("renders closing section", () => {
            // arrange
            render(
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            );
            const heading = screen.getByRole("heading", {
               level: 2,
               name: /Make a plan for your weekend/i 
            });
            const button = screen.getByRole("link", {
                name: /view my weekend/i
            });

            // act


            // assert
            expect(heading).toBeInTheDocument();
            expect(button).toBeInTheDocument();
        });
    });
});
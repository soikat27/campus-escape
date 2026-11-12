import { MemoryRouter, Routes, Route } from "react-router";
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import Category from "./Category.jsx";
import { render, screen } from "@testing-library/react";

describe(":Category compenent heading section", () => {
    const pages = [
        ["/restaurants", /restaurants at gettysburg/i, "restaurants-image"],
        ["/museums", /museums & cinema at gettysburg/i, "museums-image"],
        ["/shops", /gift & souvenir shops at gettysburg/i, "shops-image"],
        ["/parks", /park & outdoor spaces at gettysburg/i, "parks-image"],
    ];

    // fake global method stub for "fetch"
    beforeEach(() => {
        vi.stubGlobal("fetch", async () => ({
            ok: true,
            json: async () => ({features: []})
        }));
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    for (const [path, text, img] of pages) {
        it(`renders heading and image for ${path}`, async () => {
            // arrange
            render(
                <MemoryRouter initialEntries={[path]}>
                    <Routes>
                        <Route path="/:category" element={<Category />} />
                    </Routes>
                </MemoryRouter>
            );

            const heading = await screen.findByRole("heading", {
                level: 3,
                name: text
            });
            const image = await screen.findByRole("img", {name: img});

            // act

            // assert
            expect(heading).toBeVisible();
            expect(image).toBeVisible();
        });
    }
});

describe("main section", () => {
    beforeAll(() => {
        vi.stubGlobal("fetch", async () => ({
            ok: true,
            json: async () => ({
                features: [
                    {
                        properties: {
                            place_id: "demo-tommys-pizza",
                            name: "Tommy's Pizza",
                            address_line2:
                                "105 Steinwehr Avenue, Gettysburg, PA 17325, United States of America",
                            categories: [
                                "building",
                                "building.catering",
                                "catering",
                                "catering.restaurant",
                                "catering.restaurant.pizza",
                            ],
                            website: "https://tommyspizzainc.com/",
                            opening_hours: "Mo,We-Su 11:00-22:00; Tu off",
                        },
                    },
                ]
            })
        }));
    });

    afterAll(() => {
        vi.unstubAllGlobals();
    });
    
    it("renders a place corerctly", async () => {
        // arrange
        render(
            <MemoryRouter initialEntries={["/museums"]}>
                <Routes>
                    <Route path={"/:category"} element={<Category />} />
                </Routes>
            </MemoryRouter>
        );
        const placeName = await screen.findByRole("heading", {
            level: 4,
            name: /Name: Tommy's Pizza/i
        });
        const website = await screen.findByRole("link", {name: "https://tommyspizzainc.com/"})
        const phone = await screen.findByText(/Phone Unavailable/i);

        // act

        // assert
        expect(placeName).toBeInTheDocument();
        expect(website).toBeInTheDocument();
        expect(phone).toBeInTheDocument();
    });
});

describe("Loading state", () => {
    beforeAll(() => {
        vi.stubGlobal("fetch", () => new Promise(() => {}));
    });

    afterAll(() => {
        vi.unstubAllGlobals();
    });
    
    it("renders loading text", () => {
        // arrange
        render(
            <MemoryRouter initialEntries={["/restaurants"]}>
                <Routes>
                    <Route path={"/:category"} element={<Category />}/>
                </Routes>
            </MemoryRouter>
        );
        const loading = screen.getByText(/Loading.../i);

        // act

        // assert
        expect(loading).toBeInTheDocument();
    })
})

describe("Error state", () => {
    beforeAll(() => {
        vi.stubGlobal("fetch", () => Promise.reject(new Error("demo error")));
    });

    afterAll(() => {
        vi.unstubAllGlobals();
    });
    
    it("renders error text", async () => {
        // arrange
        render(
            <MemoryRouter initialEntries={["/restaurants"]}>
                <Routes>
                    <Route path={"/:category"} element={<Category />}/>
                </Routes>
            </MemoryRouter>
        );
        const error = await screen.findByText(/demo error/i);

        // act

        // assert
        expect(error).toBeInTheDocument();
    })
})
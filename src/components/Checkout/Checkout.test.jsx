import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Checkout from "./Checkout.jsx";
import { MemoryRouter, Routes, Route, Outlet } from "react-router";

describe("cart empty view", () => {
    it("renders empty message", () => {
        // arrange
        render(
            <MemoryRouter initialEntries={["/checkout"]}>
                <Routes>
                    <Route element={<Outlet context={{myWeekend: [], setMyWeekend: vi.fn()}} />}>
                        <Route path="/checkout" element={<Checkout />}/>
                    </Route>
                </Routes>
            </MemoryRouter>
        );
        const emptyMessage = screen.getByText(/Your weekend plan looks empty!/i);

        // act

        // assert
        expect(emptyMessage).toBeInTheDocument();
    })
});

describe("cart place view", () => {
    it("renders place", async () => {
        // arrange
        render(
            <MemoryRouter initialEntries={["/checkout"]}>
                <Routes>
                    <Route element={<Outlet context={{myWeekend: [{placeId: "placeId-1", name: "place-1", groupSize: 13}], setMyWeekend: vi.fn()}} />}>
                        <Route path="/checkout" element={<Checkout />}/>
                    </Route>
                </Routes>
            </MemoryRouter>
        );
        const emptyMessage = screen.queryByText(/Your weekend plan looks empty!/i);
        const placeName = screen.getByRole("heading", {
            level: 4,
            name: /place-1/i
        });

        // assert
        expect(emptyMessage).not.toBeInTheDocument();
        expect(placeName).toBeInTheDocument();
    
    })
});
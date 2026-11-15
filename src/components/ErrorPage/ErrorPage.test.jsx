import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { describe, expect, it } from "vitest";
import routes from "../../routes.jsx";
import userEvent from "@testing-library/user-event";

describe("error page behavior", () => {
    it("renders error message", async () => {
        // arrange
        const router = createMemoryRouter(routes, {
            initialEntries: ["bad-url"]
        });
        render(
            <RouterProvider router={router}/>
        );
        const errorMsg = screen.getByText(/Opps! Looks like we hit a deadend!/i);
        const homeBtn = screen.getByRole("link");
        const user = userEvent.setup();

        // assert
        expect(errorMsg).toBeInTheDocument();

        // act
        await user.click(homeBtn);

        // assert
        const heading = screen.getByRole("heading", {
            level: 1,
            name: /Escape and Recharge/i
        });
        expect(heading).toBeInTheDocument();
    });
})
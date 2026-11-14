import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ItemCart from "./ItemCart.jsx";
import userEvent from "@testing-library/user-event";

describe("group size behavior", () => {
    it("increments on + button ", async () => {
        // arrange
        render(
            <ItemCart 
                groupSize={4}
                updateMyWeekend={vi.fn()}
            />
        );
        const user = userEvent.setup();
        const plusBtn = screen.getByRole("button", {name: /\+/i});
        const groupSize = screen.getByLabelText(/Group size:/i);
        expect(groupSize).toHaveValue(4);

        // act
        await user.click(plusBtn);

        // assert
        expect(groupSize).toHaveValue(5);
    });

    it("decrements on - button ", async () => {
        // arrange
        render(
            <ItemCart 
                groupSize={4}
                updateMyWeekend={vi.fn()}
            />
        );
        const user = userEvent.setup();
        const minusBtn = screen.getByRole("button", {name: "-"});
        const groupSize = screen.getByLabelText(/Group size:/i);
        expect(groupSize).toHaveValue(4);

        // act
        await user.click(minusBtn);

        // assert
        expect(groupSize).toHaveValue(3);
    });

    it("updates on Tab", async () => {
        // arrange
        render(
            <ItemCart 
                groupSize={4}
                updateMyWeekend={vi.fn()}
            />
        );
        const user = userEvent.setup();
        const groupSize = screen.getByLabelText(/Group size:/i);
        expect(groupSize).toHaveValue(4);

        // act
        await user.clear(groupSize);
        await user.type(groupSize, "88");
        await user.tab();

        // assert
        expect(groupSize).toHaveValue(88);

        // act-2
        await user.clear(groupSize);
        await user.tab();

        // assert
        expect(groupSize).toHaveValue(4);
    });
})
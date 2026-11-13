import { useState } from "react";

export default function useGroupSize(groupSize) {
    const [draftGroupSize, setDraftGroupSize] = useState(groupSize);

    function validateGroupSize(event) {
        // 1. clear custom validity
        const input = event.currentTarget;
        input.setCustomValidity("");

        // 2. enforce new validity rules
        const value = Number(input.value);
        if (!value || value < 1)
            input.setCustomValidity("Please enter a valid group. Group size must be a number greater than 0");

        // 3. report validity
        input.reportValidity();
    }

    function resetIfInvalid(event, deafultSize) {
        if (!event.currentTarget.checkValidity())
            setDraftGroupSize(deafultSize);
        event.currentTarget.setCustomValidity("");
    }

    return {draftGroupSize, setDraftGroupSize, validateGroupSize, resetIfInvalid};
}
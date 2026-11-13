import { useOutletContext } from "react-router";

export default function useMyWeekendContext() {
    const {myWeekend, setMyWeekend} = useOutletContext();

    return {myWeekend, setMyWeekend};
}
import { useState } from "react";

function useDisplay() {
    const [display, setDisplay] = useState("");
    const appendDisplay = (value) => {
        setDisplay((prev) => prev + value);
    }
    const clearDisplay = () => {
        setDisplay("");
    }

    const deleteDisplay = () => {
        if (display === "Error") {
            setDisplay("")
        } else {
            setDisplay((prev) => prev.slice(0, -1))
        }
    }
    return { display, setDisplay, appendDisplay, clearDisplay, deleteDisplay };

}
export default useDisplay;
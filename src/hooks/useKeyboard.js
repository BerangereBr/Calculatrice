import { useEffect } from "react";

function useKeyboard(onKeyPress) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            const allowedKeys = [
                "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                "+", "-", "*", "/", ".", "Enter", "Backspace"
            ];

            if (!allowedKeys.includes(event.key)) return;

            event.preventDefault();
            onKeyPress(event.key);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onKeyPress]);
};

export default useKeyboard;
import { useEffect, useState } from "react";

function useDarkMode() {
    const [dark, setDark] = useState(() => {
        return localStorage.theme === "dark"
    });
    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark")
            localStorage.theme === "dark"
        } else {
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
            localStorage.theme === "light"
        }
    }, [dark])

    return { dark, toggle: () => setDark(d => !d) }
}

export default useDarkMode;
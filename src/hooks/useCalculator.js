import calculate from "../utils/calculate"

function useCalculator({ display, setDisplay }) {
    const onEqual = () => {
        const result = calculate(display)
        setDisplay(String(result))
    }
    return { onEqual }
}

export default useCalculator;
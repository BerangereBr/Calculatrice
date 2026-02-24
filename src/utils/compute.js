function compute(a, b, operator) {
    if (operator === "/") {
        if (b === 0) return "Error"
        return a / b
    }
    if (operator === "*") return a * b
    if (operator === "+") return a + b
    if (operator === "-") return a - b
}
export default compute;
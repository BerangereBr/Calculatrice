function valideExpression(e) {
    if (e.length === 0) return false

    for (let i = 1; i < e.length; i++) {

        const number = !isNaN(e[i])
        const operator = "+-*/".includes(e[i])
        if (i % 2 === 0 && !number) return false
        if (i % 2 === 1 && !operator) return false
    }
    return true
}

function calculate(expression) {
    try {
        let match = expression.match(/\d+(\.\d+)?|[+\-*/]/g)
        if (!match) return "Error"
        for (let i = 0; i < match.length; i++) {
            if (match[i] === "-" && (i === 0 || "+-/*".includes(match[i - 1]))) {
                match.splice(i, 2, (-parseFloat(match[i + 1])).toString())
            }
        }
        for (let i = 0; i < match.length; i++) {
            if ("+-/*".includes(match[i]) && "+-/*".includes(match[i + 1])) {
                return false
            }
        }
        if (!valideExpression(match)) return "Error"
        while (match.length > 1) {
            const op = match.findIndex(el => el === "/" || el === "*")
            if (op != -1) {
                const a = parseFloat(match[op - 1])
                const b = parseFloat(match[op + 1])
                const operator = match[op]

                let result

                if (operator === "/") {
                    if (b === 0) return "Error"
                    result = a / b
                }
                if (operator === "*") {
                    result = a * b
                }
                match = [...match.slice(0, op - 1),
                result.toString(),
                ...match.slice(op + 2)
                ]
            }
            const nextOp = match.findIndex(el => el === "+" || el === "-")
            if (nextOp != -1) {
                const a = parseFloat(match[nextOp - 1])
                const b = parseFloat(match[nextOp + 1])
                const operator = match[nextOp]
                let result

                if (operator === "+") {
                    result = a + b
                }
                if (operator === "-") {
                    result = a - b
                }
                match = [...match.slice(0, nextOp - 1),
                result.toString(),
                ...match.slice(nextOp + 2)
                ]
            }
        }

        return Number(match[0])
    } catch {
        return "Error"
    }
}
export default calculate;


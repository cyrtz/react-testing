import { useState } from "react";

const useCalculatorHook = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "num1") {
            setNum1(value);
        } else if (name === "num2") {
            setNum2(value);
        } else if (name === "opterator") {
            setOperator(value);
        }
    };

    const calculate = () => {
        const parsedNum1 = parseFloat(num1);
        const parsedNum2 = parseFloat(num2);

        switch (operator) {
            case "+":
                setResult(parsedNum1 + parsedNum2);
                break;
            case "-":
                setResult(parsedNum1 - parsedNum2);
                break;
            case "*":
                setResult(parsedNum1 * parsedNum2);
                break;
            case "/":
                setResult(parsedNum1 / parsedNum2);
                break;
            default:
                setResult("Invalid operator");
        }
    };

    return {
        num1,
        num2,
        operator,
        result,
        handleChange,
        calculate
    };
};

export default useCalculatorHook;
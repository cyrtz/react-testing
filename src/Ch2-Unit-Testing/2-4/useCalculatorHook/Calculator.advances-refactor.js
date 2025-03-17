import useCalculatorHook from "./useCalculatorHook";

const Calculator = () => {
    const { num1, num2, operator, result, handleChange, calculate } = useCalculatorHook();

    return (
        <div>
            <input data-test-id="number1" type="number" name="num1" value={num1} onChange={handleChange} />
            <select data-test-id="operator" name="opterator" value={operator} onChange={handleChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input data-test-id="number2" type="number" name="num2" value={num2} onChange={handleChange} />
            <button data-test-id="calculate" onClick={calculate}>Calculate</button>
            <div data-test-id="result">{result}</div>
        </div>
    );
};

export default Calculator;
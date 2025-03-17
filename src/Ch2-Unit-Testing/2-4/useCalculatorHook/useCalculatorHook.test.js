import { fireEvent, render, screen } from "@testing-library/react";
import useCalculatorHook from "./useCalculatorHook";

describe('useCalculatorHook', () => {
    test('should get 8 when 5 + 3', () => {
        const TestComponent = () => {
            const { num1, num2, operator, result, handleChange, calculate } = useCalculatorHook();

            return (
                <div>
                    <input data-test-id="number1" type="number" name="num1" value={num1} onChange={handleChange} />
                    <select data-test-id="operator" name="operator" value={operator} onChange={handleChange}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                    <input data-test-id="number2" type="number" name="num2" value={num2} onChange={handleChange} />
                    <button data-test-id="calculate" onClick={calculate}>Calculate</button>
                    <div data-test-id="result">{result}</div>
                </div>
            )
        };
        render(<TestComponent />);

        fireEvent.change(screen.getByTestId('number1'), { target: { value: 5 } });
        fireEvent.change(screen.getByTestId('operator'), { target: { value: '+' } });
        fireEvent.change(screen.getByTestId('number2'), { target: { value: 3 } });
        fireEvent.click(screen.getByTestId('calculate'));
        expect(screen.getByTestId('result')).toHaveTextContent('8');
    });
});
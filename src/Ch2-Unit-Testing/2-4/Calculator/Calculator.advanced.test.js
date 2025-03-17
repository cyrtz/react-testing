import { fireEvent, render, screen } from "@testing-library/react";
import Calculator from "./Calculator.advanced";

describe('Calculator', () => {
    it('should get 15 when 5 multiplied by 3', () =>{
        render(<Calculator />);

        fireEvent.change(screen.getByTestId('number1'), { target: { value: 5 } });
        fireEvent.change(screen.getByTestId('number2'), { target: { value: 3 } });
        
        fireEvent.change(screen.getByTestId('operator'), { target: { value: "*" } });
        fireEvent.click(screen.getByTestId('calculate'));

        expect(screen.getByTestId('result')).toHaveTextContent('15');
    });
});
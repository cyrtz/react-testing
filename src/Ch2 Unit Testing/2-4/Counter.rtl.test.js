import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe('Counter Component', () => {
    // 檢測點擊「+」按鈕後，數字要加1
    it('should get 1 when click the increment button', () => {
        render(<Counter />);

        fireEvent.click(screen.getByTestId('increment-button'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
    });

    it('should get -1 when click the decrement button', () => {
        render(<Counter />);

        fireEvent.click(screen.getByTestId('decrement-button'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('-1');
    });
});
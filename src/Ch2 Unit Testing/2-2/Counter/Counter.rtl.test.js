import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe ('Counter component', () => {

    it ('should get 1 when click the increment button', () => {
        render(<Counter />);

        fireEvent.click(screen.getByTestId('increment-button'));

        expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
    });
});
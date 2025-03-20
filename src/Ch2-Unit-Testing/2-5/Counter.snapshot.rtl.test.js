import Counter from './Counter-enhanced';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Counter Component', () => {
    xit('should match snapshot', () => {
        const { asFragment } = render(<Counter />);
        expect(asFragment()).toMatchSnapshot();
    });

    describe('full rendering', () => {
        let counter;
        const renderCounter = () => <Counter />;

        counter = render(renderCounter());

        it('should get 1 when click the increment button', () => {
            const { getByTestId } = counter;
            fireEvent.click(screen.getByTestId('increment-button'));
            expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
        });
    });
});
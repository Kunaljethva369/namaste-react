import Grocery from "../Grocery";
import { render,screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("Contact us Page",() => {
    test('should test if heading is there in compo',() => {
        render(<Grocery />);
        const input = screen.getByRole('heading');
        expect(input).toBeInTheDocument();
    });

    test('should test if inputs is there in compo',() => {
        render(<Grocery />);
        const input = screen.getAllByRole('textbox');
        expect(input.length).toBe(2);
    });
})
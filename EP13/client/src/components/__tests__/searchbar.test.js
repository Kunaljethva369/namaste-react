import { fireEvent,render,screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainLayout from '../MainLayout';
import Mock_Data from '../mock/restaurantMock.json';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(Mock_Data)
        }
    })
})

test("Should filter our the cards based on search",async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <MainLayout />
            </BrowserRouter>
        )
    );

    const searchBtn = screen.getByRole('button');

    const searchValue = screen.getByTestId('searchBar');

    fireEvent.change(searchValue,{ target: { value: "pizza" } });

    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId('resCard');

    expect(cards.length).toBe(2);

});
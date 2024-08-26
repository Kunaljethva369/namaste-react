import { act } from "react-dom/test-utils";
import RestaurantLayout from "../RestaurantLayout";
import Mock_DATA from '../mock/restaurantDetailMock.json';
import '@testing-library/jest-dom';
import { render,screen } from '@testing-library/react'

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () => {
            return Promise.resolve(Mock_DATA);
        }
    })
})

test("should test restaurant Menu Component",async () => {
    await act(async () => {
        render(<RestaurantLayout />);
    })

    const restaurantTitle = screen.getByText('Burger King');

    expect(restaurantTitle).toBeInTheDocument();
})
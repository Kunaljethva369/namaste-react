import { Provider } from 'react-redux';
import Header from '../Header';
import { render,screen } from '@testing-library/react';
import { BrowserRouter,Link } from 'react-router-dom';  
import AppStore from '../../store/AppStore';
import '@testing-library/jest-dom';

it("Should check if header component have cart",() => {
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginbtn = screen.getByText('Cart');

    expect(loginbtn).toBeInTheDocument();
});

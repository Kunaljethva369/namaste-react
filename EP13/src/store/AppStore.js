import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../Slice/cartSlice';

const AppStore = configureStore({
    reducer:{
        cart : cartSlice
    }
});

export default AppStore;
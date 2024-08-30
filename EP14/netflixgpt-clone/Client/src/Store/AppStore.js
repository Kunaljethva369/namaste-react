import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './Slice/UserSlice';

const AppStore = configureStore({
    reducer: {
        User: UserSlice
    }
});

export default AppStore;
import {configureStore} from '@reduxjs/toolkit';
import firstSlice from './slices/firstSlice';

const store = configureStore({
    reducer: {
        first: firstSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';

const rootReducer = {
    users: userReducer
}
const storeRedux = configureStore({
    reducer: rootReducer
})

export default storeRedux
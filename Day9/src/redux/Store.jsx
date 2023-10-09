import { configureStore } from '@reduxjs/toolkit';
import emailReducer from '../redux/Reducers';

const rootReducer = {
  email: emailReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

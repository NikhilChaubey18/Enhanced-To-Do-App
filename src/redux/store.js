import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import weatherReducer from './weatherSlice';
import authReducer from './authSlice';

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    weather: weatherReducer,
    auth: authReducer,
  },
});
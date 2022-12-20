import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    missionsReducer,
  },
});

export default store;

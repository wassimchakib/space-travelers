import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missionsReducer,
    rockets: rocketReducer,
  },
});

export default store;

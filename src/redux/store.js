import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missionsSlice';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  middleware: [logger, thunk],
  reducer: {
    missionsReducer,
    rockets: rocketReducer,
  },
});

export default store;

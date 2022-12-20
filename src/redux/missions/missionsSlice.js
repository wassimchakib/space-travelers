import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from '../../api/ApiService';

const initialState = {
  missions: [],
};

const FETCHED_MISSONS = 'space-travelers/missions/fetched-missions';

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `${FETCHED_MISSONS}/fulfilled`:
      return {
        ...state,
        missions: [...payload],
      };

    default:
      return state;
  }
};

export const getMissions = createAsyncThunk(FETCHED_MISSONS, ApiService.fetchMissions);

export default reducer;

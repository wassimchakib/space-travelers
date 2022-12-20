import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MissionService from '../../services/missionsService';

// Actions
const FETCHED_MISSONS = 'space-travelers/missions/FETCHED_MISSONS';

// Actions Creator
export const getMissions = createAsyncThunk(FETCHED_MISSONS, MissionService.fetchMissions);

// Slice
const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => ({
      ...state,
      missions: action.payload,
    }));
  },
});

export default missionSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MissionService from '../../services/missionsService';

// Actions
const FETCH_MISSIONS = 'space-travelers/missions/FETCH_MISSIONS';

// Actions Creator
export const getMissions = createAsyncThunk(FETCH_MISSIONS, MissionService.fetchMissions);

// Slice
const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    isLoading: false,
  },

  reducers: {
    joinMission: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.missionId !== action.payload) {
          return mission;
        }
        return { ...mission, joinedMission: !mission.joinedMission };
      });
      return { ...state, missions: newState };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(getMissions.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      missions: action.payload,
    }));

    builder.addCase(getMissions.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error,
    }));
  },
});

export default missionSlice.reducer;
export const { joinMission } = missionSlice.actions;

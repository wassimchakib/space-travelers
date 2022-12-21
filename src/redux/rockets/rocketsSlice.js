import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import RocketService from '../../services/rocketService';

const GET_ROCKETS = 'space-travelers/rockets/GET_ROCKETS';

const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const result = await RocketService.fetchRockets();
  const rockets = [];
  result.forEach((rocket) => {
    rockets.push({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      description: rocket.description,
      images: rocket.flickr_images,
      reserved: false,
    });
  });
  return rockets;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    loading: false,
    error: '',
  },
  reducers: {
    reserveRocket: (state, action) => {
      const newState = state.rockets.map(rocket => {
        if(rocket.id !== action.payload) return rocket;
        return {...rocket, reserved: !rocket.reserved}
      });
      return {...state, rockets: newState}
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getRockets.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      rockets: action.payload,
    }));
    builder.addCase(getRockets.rejected, (state, action) => ({
      ...state,
      loading: false,
      rockets: [],
      error: action.error.message,
    }));
  },
});

export default rocketsSlice.reducer;
export { getRockets};
export const { reserveRocket } = rocketsSlice.actions;
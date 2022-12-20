import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import RocketService from '../../services/rocketService';

const GET_ROCKETS = 'spacetravelers/rockets/GET_ROCKETS';

const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const result = await RocketService.fetchRockets();
  const rockets = [];
  result.forEach((rocket) => {
    rockets.push({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      description: rocket.description,
      images: rocket.flickr_images,
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
export { getRockets };

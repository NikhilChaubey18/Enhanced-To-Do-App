import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ taskId }) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=a4fb0cf74d5bf6a9180ee42855f9129e&units=metric`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return { taskId, data: { temp: data.main.temp, description: data.weather[0].description } };
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state, action) => {
        state[action.meta.arg.taskId] = { loading: true, error: null, data: null };
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state[action.payload.taskId] = {
          loading: false,
          error: null,
          data: action.payload.data,
        };
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state[action.meta.arg.taskId] = {
          loading: false,
          error: 'Failed to fetch weather',
          data: null,
        };
      });
  },
});

export default weatherSlice.reducer;

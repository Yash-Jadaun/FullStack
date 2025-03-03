import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 }, // Initial state
  reducers: {
    increment: (state) => {
      state.value += 1; // Increment by 1
    },
    decrement: (state) => {
      state.value -= 1; // Decrement by 1
    },
    reset: (state) => {
      state.value = 0; // Reset to 0
    },
    NewAdd2: (state) => {
      state.value += 2; // Increment by 2
    },
  },
});

// Export actions
export const { increment, decrement, reset, NewAdd2 } = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;

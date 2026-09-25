import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from '../Features/CounterSlice.js';

export const store=configureStore({
  reducer: {
    counter: CounterSlice,
  },
});
import { configureStore } from '@reduxjs/toolkit';
import perennialReducer  from './client/features/perennials/perennialSlice';

const store = configureStore({
  perennials: perennialReducer,
})

export default store;
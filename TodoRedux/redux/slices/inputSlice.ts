import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  search: string;
}

const initialState: CounterState = {
  search: '',
};

const InputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = InputSlice.actions;

export default InputSlice.reducer;

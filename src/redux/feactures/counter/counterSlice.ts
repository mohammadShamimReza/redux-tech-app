import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CounterState  {
  count: number
}


const initialState: CounterState = {
  count: 0,
  }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremet: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => { 
      state.count = state.count - 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => { 
      state.count += action.payload
    }
  }
})

export const {decrement, incremet, incrementByValue} = counterSlice.actions

export default counterSlice.reducer
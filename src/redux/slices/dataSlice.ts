import { createSlice } from '@reduxjs/toolkit';

interface IPosts {
  posts: {
    userId?: number,
    id?: number,
    title?: string,
    body?: string,
  }[]
}

const initialState: IPosts = {
  posts: [{
    userId: undefined,
    id: undefined,
    title: undefined,
    body: undefined,
  }]
};

const adSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    }
  },
});

export const { setPosts } = adSlice.actions;

export default adSlice.reducer;
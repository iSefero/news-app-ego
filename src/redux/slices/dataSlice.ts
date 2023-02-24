import { createSlice } from '@reduxjs/toolkit';

export interface IPosts {
  posts: {
    userId?: number,
    id?: number,
    title?: string,
    body?: string,
  }[]
}

const initialState: IPosts = {
  posts: [{
    userId: 0,
    id: 0,
    title: "",
    body: "",
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
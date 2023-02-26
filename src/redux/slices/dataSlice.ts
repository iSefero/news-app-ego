import { createSlice } from '@reduxjs/toolkit';

export interface IPosts {
  posts: {
    userId?: number,
    id?: number,
    title?: string,
    body?: string,
  }[],
  isLoading: boolean,
  isAllDataLoaded: boolean
}

const initialState: IPosts = {
  posts: [{
    userId: 0,
    id: 0,
    title: "",
    body: "",
  }],
  isLoading: true,
  isAllDataLoaded: false
};

const postsSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setAllDataLoaded(state, action) {
      state.isAllDataLoaded = action.payload;
    },
    setMorePosts(state, action) {
      state.posts = [...state.posts, ...action.payload];
    },
  },
});

export const { setPosts, setMorePosts, setLoading, setAllDataLoaded } = postsSlice.actions;

export default postsSlice.reducer;
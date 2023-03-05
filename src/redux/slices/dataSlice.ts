import { createSlice } from '@reduxjs/toolkit';
import {IPost} from "../../types/types";

export interface IPosts {
  posts: IPost[],
  isLoading: boolean,
  isAllDataLoaded: boolean
}

const initialState: IPosts = {
  posts: [{
    author: "",
    content: "",
    description: "",
    publishedAt: "",
    source: {
      id: "",
      name: "",
    },
    title: "",
    url: "",
    urlToImage: "",

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
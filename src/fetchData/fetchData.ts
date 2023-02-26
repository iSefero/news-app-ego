import axios from "axios";
import {setAllDataLoaded, setLoading, setMorePosts, setPosts} from "../redux/slices/dataSlice";
import React from "react"

const url = "https://jsonplaceholder.typicode.com/posts?_page="

export const fetchData = async (dispatch: React.Dispatch<{}>) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`${url}1&_limit=5`);
    (dispatch(setPosts(response.data)));
  } catch (error) {
    dispatch(setLoading(false));
    alert("Помилка під час запиту даних");
  }
  dispatch(setLoading(false));
};

export const fetchMoreData = async (dispatch: React.Dispatch<{}>, page: number) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`${url}${page}&_limit=5`)
    if (response.data.length === 0) {
    dispatch(setAllDataLoaded(true))
    } else {
    dispatch(setMorePosts(response.data))
    }
  } catch (error) {
    alert("Помилка під час запиту даних")
  }
  dispatch(setLoading(false));
};

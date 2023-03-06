// React
import React from "react"
// Axios
import axios from "axios";

// Common
import { setAllDataLoaded, setLoading, setMorePosts, setPosts } from "../redux/slices/dataSlice";

const url = 'https://newsapi.org/v2/top-headlines?' +
            'sources=bbc-news&' +
            'pageSize=3&page=';
const apiKey = process.env.REACT_APP_NEWS_API;

export const fetchData = async (dispatch: React.Dispatch<{}>) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`${url}${1}${apiKey}`);
    (dispatch(setPosts(response.data.articles)));
  } catch (error) {
    dispatch(setLoading(false));
    alert("Помилка під час запиту даних");
  }
  dispatch(setLoading(false));
};

export const fetchMoreData = async (dispatch: React.Dispatch<{}>, page: number) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`${url}${page}${apiKey}`)
    const responseLengthData = await axios.get(`${url}${page + 1}${apiKey}`)
    if (responseLengthData.data.articles.length === 0) {
    dispatch(setAllDataLoaded(true))
      dispatch(setMorePosts(response.data.articles))

    } else {
    dispatch(setMorePosts(response.data.articles))
    }
  } catch (error) {
    alert("Помилка під час запиту даних")
  }
  dispatch(setLoading(false));
};

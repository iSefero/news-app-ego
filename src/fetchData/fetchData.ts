import {setPosts} from "../redux/slices/dataSlice";
import React from "react";
import {useAppDispatch} from "../redux/store";

export const FetchData = () => {
  const dispatch = useAppDispatch()

React.useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => dispatch(setPosts(json)))

}, [])
}
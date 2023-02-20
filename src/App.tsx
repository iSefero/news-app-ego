import React from 'react';
import './App.css';
import {FetchData} from "./fetchData/fetchData";
import {useAppSelector} from "./redux/store";

function App() {
  const data = useAppSelector(state => state.data)

  FetchData()


  console.log(data)

  return (
    <div className="App">
      hi
    </div>
  );
}

export default App;

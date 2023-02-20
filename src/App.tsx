import React from 'react';
import './App.css';
import {FetchData} from "./fetchData/fetchData";
import {useAppSelector} from "./redux/store";
import {Header} from "./components/header/Header";
import { useTranslation } from 'react-i18next';

function App() {
  const data = useAppSelector(state => state.data)
  const { t } = useTranslation();

  FetchData()

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App ;

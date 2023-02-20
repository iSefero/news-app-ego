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

  console.log(data)

  return (
    <div className="App">
      <h1>{t("hi")}</h1>
      <Header/>
    </div>
  );
}

export default App ;

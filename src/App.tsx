// React
import React from 'react';
import { Route, Routes } from "react-router-dom";

// Common
import { useAppDispatch } from "./redux/store";
import { setPosts } from "./redux/slices/dataSlice";
import { Main } from "./pages/main/Main";
import { News } from "./pages/news/News";
import { Profile } from "./pages/profile/Profile";

// Axios
import axios from "axios"

interface AppContextType {
  handleOpen: () => void;
  handleClose: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  handleClearStorage: () => void;
}

export const AppContext = React.createContext<AppContextType>({} as AppContextType);

function App() {
  const dispatch = useAppDispatch();

  const [ open, setOpen ] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClearStorage = () => {
    localStorage.clear();
  }

  React.useEffect(() => {
    async function fetchData() {
      try {
        await axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => dispatch(setPosts(response.data)))
      } catch (error) {
        alert("Помилка під час запиту даних")
      }
    }
    fetchData()
  }, [])

  const value = {
    handleOpen,
    handleClose,
    setOpen,
    open,
    handleClearStorage,
  };

  return (
    <div style={{ background: "#d5d1d1", height: "100%", minHeight: "100vh" }}>
      <AppContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App ;

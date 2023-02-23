// React
import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";

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
  const navigate = useNavigate()

  const [ open, setOpen ] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClearStorage = () => {
    localStorage.clear();
    if (window.location.pathname === "/profile")
      return navigate("/");
  }

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(setPosts(response.data))
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
            <Route path="" element={<Main/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="*" element={<Main/>}/>
          </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App ;

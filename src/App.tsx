// React
import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";

// Common
import { Main } from "./pages/main/Main";
import { News } from "./pages/news/News";
import { Profile } from "./pages/profile/Profile";


interface AppContextType {
  toggleMenu: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  handleClearStorage: () => void;
}

export const AppContext = React.createContext<AppContextType>({} as AppContextType);

function App(): React.ReactElement {
  const navigate = useNavigate();

  const [ open, setOpen ] = React.useState<boolean>(false);
  const toggleMenu = (): void => {
    setOpen(prev => !prev)
  };

  const handleClearStorage = (): void => {
    localStorage.clear();
    if (window.location.pathname === "/profile")
      return navigate("/");
  };

  const providerData = {
    toggleMenu,
    setOpen,
    open,
    handleClearStorage,
  };

  return (
    <div style={{ background: "#d5d1d1", height: "100%", minHeight: "100vh" }}>
      <AppContext.Provider value={providerData}>
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

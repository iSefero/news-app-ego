// React
import * as React from 'react';
import { Link } from 'react-router-dom';

// MUI
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// i18n
import { useTranslation } from 'react-i18next';

// Common
import { ChangeLangButton } from "../changeLangButton/ChangeLangButton";
import { AppContext } from "../../App";
import { Authorization } from "../authorization/Authorization";


export function Header(): React.ReactElement {
  const loggedIn = localStorage.getItem("person") === null;
  const { toggleMenu, handleClearStorage } = React.useContext(AppContext);
  const [ clearStorage, setClearStorage ] = React.useState<boolean>(true);

  const { t } = useTranslation();

  const pages = [
    {
      link: "/",
      name: t("titles.main"),
    },
    {
      link: "/profile",
      name: t("titles.profile"),
    },
    {
      link: "/news",
      name: t("titles.news"),
    }
  ];

  const [ selectedItem, setSelectedItem ] = React.useState<string>(pages.find((page) => page.link === window.location.pathname)?.link || "");

  const handleSelected = ( link: string ) => {
    setSelectedItem(link);
  };

  const renderPages = pages.map((item, index) => (
    <Link
      key={index}
      to={item.link}
      style={{textDecoration: "none", color: selectedItem === item.link ? "black" : "inherit"}}
      onClick={() => handleSelected(item.link)}
    >
      <Typography variant="h5" component="div">
        {item.name}
      </Typography>
    </Link>
  ));

  const handleLogIn = (): void => {
    if (loggedIn) return toggleMenu();

    handleClearStorage();
    // This action tells the component that the localStorage is cleared and it should display another UI
    setClearStorage(!clearStorage)
  };

  // Display either the login button or the logout button
  const loginButton = (): JSX.Element => {
    return (
      <Button onClick={handleLogIn} sx={{ fontSize: "20px", gap: "10px" }} color="inherit">
        {!loggedIn && <AccountCircleIcon/>}
        {t(loggedIn ? "buttons.login" : "buttons.logout")}
      </Button>
    )
  };

  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: "30px" }}>
              {renderPages}
            </Box>
            <Box sx={{ display: "flex", gap: "15px" }}>
              {loginButton()}
              <ChangeLangButton />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Authorization/>
    </div>
  );
}

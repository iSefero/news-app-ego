// React
import * as React from 'react';
import { Link } from 'react-router-dom';

// MUI
import {AppBar, Box, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// i18n
import { useTranslation } from 'react-i18next';

// Common
import { ChangeLangButton } from "../changeLangButton/ChangeLangButton";
import { AppContext } from "../../App";
import { Authorization } from "../authorization/Authorization";
import flag from "../../assets/images/flag.png"
import { ImprovedButton } from "../Button/Button";
import { linkPagesStyle, styles } from './HeaderStyle';

export const Header: React.FC = () => {
  const loggedIn = localStorage.getItem("person") === null;
  const { toggleMenu, handleClearStorage } = React.useContext(AppContext);
  const [ clearStorage, setClearStorage ] = React.useState<boolean>(true);

  const { t } = useTranslation();

  const pages = [
    {
      link: "/" || "",
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
      style={linkPagesStyle(selectedItem, item.link)}
      onClick={() => handleSelected(item.link)}
    >
      <Typography variant="h4" component="div">
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
      <ImprovedButton
        onClick={handleLogIn}
        text={[!loggedIn && <AccountCircleIcon/> , t(loggedIn ? "buttons.login" : "buttons.logout")]}
      />
    )
  };

  return (
    <div>
      <Box>
        <AppBar sx={styles.wrapper}>
          <Toolbar sx={styles.content}>
            <Box sx={styles.leftSide}>
              <img style={styles.logo} alt="error" src={flag}/>
              <Box sx={styles.pages}>
                {renderPages}
              </Box>
            </Box>
            <Box sx={styles.rightSide}>
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

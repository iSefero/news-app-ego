// React
import * as React from 'react';

// MUI
import { TextField, Box, Modal} from '@mui/material';

// i18n
import { useTranslation } from "react-i18next";

// Common
import { AppContext } from "../../App";
import {ImprovedButton} from "../Button/Button";
import { styles } from './AuthorizationStyle';
import { ILocalStorageData } from "../../types/types";


export const Authorization: React.FC =() => {
  const { t } = useTranslation();
  const { open, toggleMenu } = React.useContext(AppContext);

  const [ account, setAccount ] = React.useState<ILocalStorageData>({username: "", password: ""});

  const handleUsernameChange = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
    setAccount({...account, username:event.target.value});
  };

  const handlePasswordChange = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
    setAccount({...account, password: event.target.value});
  };

  // Authorizing and writing user data to localStorage
  const handleSubmit = ( event: React.FormEvent<HTMLFormElement> ): void => {
    event.preventDefault();

    if (account.username === 'admin' && account.password === '12345') {
      localStorage.setItem('person', JSON.stringify(account));
      toggleMenu();
    } else {
      alert('Неправильне ім\'я користувача або пароль');
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={toggleMenu}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.wrapper} >
          <form onSubmit={handleSubmit}>
            <Box sx={styles.content}>
              <Box>
                <TextField
                  label={t("placeholders.login")}
                  size="small"
                  type="text"
                  id="username"
                  name="username"
                  value={account.username}
                  onChange={handleUsernameChange}
                />
              </Box>
              <Box>
                <TextField
                  label={t("placeholders.password")}
                  size="small"
                  type="password"
                  id="password"
                  name="password"
                  value={account.password}
                  onChange={handlePasswordChange}
                />
              </Box>
              <ImprovedButton text={t("buttons.signin")}/>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

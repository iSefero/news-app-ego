// React
import * as React from 'react';

// MUI
import { Button, TextField, Box, Modal} from '@mui/material';

// i18n
import { useTranslation } from "react-i18next";

// Common
import { style } from './AuthorizationStyle';
import { AppContext } from "../../App";


export function Authorization() {
  const { t } = useTranslation();
  const { open, handleClose } = React.useContext(AppContext);

  const [ username, setUsername ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

  const handleUsernameChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setPassword(event.target.value);
  };

  // Authorizing and writing user data to localStorage
  const handleSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();

    if (username === 'admin' && password === '12345') {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      handleClose();
    } else {
      alert('Неправильне ім\'я користувача або пароль');
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modalWrapper}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Box>
                <TextField
                  label={t("placeholders.login")}
                  size="small"
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </Box>
              <Box sx={{alignItems: "baseline"}}>
                <TextField
                  label={t("placeholders.password")}
                  size="small"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Box>
              <Button variant="contained" type="submit">{t("buttons.signin")}</Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

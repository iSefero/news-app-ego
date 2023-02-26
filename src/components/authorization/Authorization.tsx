// React
import * as React from 'react';

// MUI
import { Button, TextField, Box, Modal} from '@mui/material';

// i18n
import { useTranslation } from "react-i18next";

// Common
import { AppContext } from "../../App";

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 4,
};

interface ILocalStorageData {
  username: string,
  password: string
}


export function Authorization(): React.ReactElement {
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
        <Box sx={style} >
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
              <Box sx={{alignItems: "baseline"}}>
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
              <Button variant="contained" type="submit">{t("buttons.signin")}</Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { UserContextProvider } from '~/contexts/user';
import { Router } from '~/Router';
import { GlobalStyle } from '~/styles/global';
import { defaultTheme } from '~/styles/themes/default';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer theme="colored" />

      <BrowserRouter>
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
};

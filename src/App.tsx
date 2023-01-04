import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartContextProvider } from '~/contexts/cart';
import { UserContextProvider } from '~/contexts/user';
import { Router } from '~/Router';
import { GlobalStyle } from '~/styles/global';
import { defaultTheme } from '~/styles/themes/default';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserContextProvider>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </UserContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
};

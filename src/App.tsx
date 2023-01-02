import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ProductsContextProvider } from './contexts/products';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProductsContextProvider>
          <Router />
        </ProductsContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
};

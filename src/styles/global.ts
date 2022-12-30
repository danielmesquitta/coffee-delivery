import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['primary-500']};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.1s ease-in-out;
  }

  body {
    background: ${({ theme }) => theme.colors['gray-100']};
    color: ${({ theme }) => theme.colors['gray-900']};
    --webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: ${({ theme }) => theme.families.roboto};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.families.baloo};
    font-weight: 700;
    line-height: 1.3;
  }

  span[color] {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    cursor: pointer;
  }
`;

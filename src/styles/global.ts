import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color['primary-500']};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.1s ease-in-out;
  }

  body {
    background: ${({ theme }) => theme.color['gray-900']};
    color: ${({ theme }) => theme.color['gray-300']};
    --webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: ${({ theme }) => theme.family.roboto};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
  }

  button {
    line-height: 0;
    cursor: pointer;
  }
`;

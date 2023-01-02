import styled from 'styled-components';

export const AmountControllerContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors['gray-400']};
  border-radius: 6px;
  height: 2.375rem;

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['secondary-500']};
  }

  > input {
    width: 1.5rem;
    text-align: center;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors['gray-900']};

    &:focus {
      box-shadow: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors['gray-900']};
      opacity: 1;
    }
  }

  > button {
    background-color: transparent;
    width: 1.4rem;
    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['secondary-500']};
    }
  }
`;

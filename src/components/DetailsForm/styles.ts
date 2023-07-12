import styled from 'styled-components';

export const DetailsFormContainer = styled.form`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['gray-200']};
  color: ${({ theme }) => theme.colors['gray-700']};
`;

export const Details = styled.ul``;

export const DetailsFooter = styled.footer`
  > p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    line-height: 1.3;
    margin-bottom: 0.75rem;

    &:last-of-type {
      margin-bottom: 1.5rem;
    }

    strong {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors['gray-800']};
      font-weight: bold;
      font-family: ${({ theme }) => theme.fonts['default']};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    border-radius: 6px;
    width: 100%;
    height: 2.875rem;
    border: 0;
    background: ${({ theme }) => theme.colors['primary-500']};
    color: ${({ theme }) => theme.colors['white']};

    &:focus {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors['primary-500']};
    }
  }
`;

import styled from 'styled-components';

export const AddressFormContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['gray-200']};
  color: ${({ theme }) => theme.colors['gray-700']};

  header {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    strong {
      font-weight: 400;
      font-family: ${({ theme }) => theme.fonts.default};
      color: ${({ theme }) => theme.colors['gray-800']};
    }
  }
`;

export const AddressFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  column-gap: 0.75rem;
  row-gap: 1rem;

  input {
    width: 100%;
    background: ${({ theme }) => theme.colors['gray-300']};
    border: 1px solid ${({ theme }) => theme.colors['gray-400']};
    border-radius: 4px;
    height: 2.625rem;
    padding: 0 0.75rem;

    &:nth-child(1) {
      grid-column: span 2;
    }

    &:nth-child(2) {
      grid-column: span 6;
    }

    &:nth-child(3) {
      grid-column: span 2;
    }

    &:nth-child(4) {
      grid-column: span 4;
    }

    &:nth-child(5) {
      grid-column: span 2;
    }

    &:nth-child(6) {
      grid-column: span 3;
    }

    &:nth-child(7) {
      grid-column: span 1;
    }
  }
`;

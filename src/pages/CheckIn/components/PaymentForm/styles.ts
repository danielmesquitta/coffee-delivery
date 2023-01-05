import styled, { css } from 'styled-components';
import type { PaymentOptionProps } from './types';

export const PaymentFormContainer = styled.form`
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

export const PaymentOptions = styled.div`
  display: flex;
  gap: 0.75rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
  }
`;

export const PaymentOption = styled.label<PaymentOptionProps>`
  position: relative;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['gray-400']};
  border: 1px solid transparent;
  display: flex;
  height: 3.25rem;
  padding: 0 1rem;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  text-transform: uppercase;
  font-size: 0.75rem;

  &,
  & * {
    cursor: pointer;
  }

  ${({ isActive }) =>
    isActive
      ? css`
          background: ${({ theme }) => theme.colors['secondary-300']};
          border-color: ${({ theme }) => theme.colors['secondary-500']};
        `
      : ''}

  &:hover {
    background: ${({ theme }) => theme.colors['secondary-300']};
    border-color: ${({ theme }) => theme.colors['secondary-500']};
  }

  input {
    position: absolute;
    visibility: hidden;
  }
`;

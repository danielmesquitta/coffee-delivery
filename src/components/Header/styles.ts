import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import type { CartButtonProps } from './types';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors['gray-200']};
  background-color: ${({ theme }) => theme.colors['gray-100']};
`;

export const HeaderContainer = styled.div`
  margin: auto;
  max-width: 72rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem 0;

  > a {
    padding: 1rem;
    margin-left: -1rem;

    > img {
      height: 2.5rem;
    }
  }

  > nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > a:last-child {
    }
  }
`;

export const AddressButton = styled(NavLink)`
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors['secondary-300']};
  color: ${({ theme }) => theme.colors['secondary-700']};
  border: none;
  border-radius: 6px;
  padding: 0 0.5rem;
  gap: 0.25rem;
`;

export const CartButton = styled(NavLink)<CartButtonProps>`
  position: relative;
  border-radius: 6px;
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.7;
          cursor: not-allowed;
          background-color: ${({ theme }) => theme.colors['gray-300']};

          &:focus {
            box-shadow: none;
          }
        `
      : css`
          background-color: ${({ theme }) => theme.colors['primary-300']};

          &:focus {
            box-shadow: 0px 0px 0px 2px
              ${({ theme }) => theme.colors['primary-500']};
          }
        `}

  > span {
    position: absolute;
    font-size: 0.75rem;
    top: -0.5rem;
    right: -0.5rem;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    background-color: ${({ theme }) => theme.colors['primary-700']};
    color: ${({ theme }) => theme.colors['white']};
  }
`;

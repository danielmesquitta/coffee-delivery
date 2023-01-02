import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

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

    > a:first-child {
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
    }

    > a:last-child {
      position: relative;
      background-color: ${({ theme }) => theme.colors['primary-300']};
      border-radius: 6px;
      width: 2.375rem;
      height: 2.375rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &:focus {
        box-shadow: 0px 0px 0px 2px
          ${({ theme }) => theme.colors['primary-500']};
      }

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
    }
  }
`;

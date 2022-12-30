import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  > img {
    height: 2.5rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > span {
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

    > a {
      background-color: ${({ theme }) => theme.colors['primary-300']};
      border-radius: 6px;
      width: 2.375rem;
      height: 2.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

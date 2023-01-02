import styled from 'styled-components';

export const ConfirmedSaleContainer = styled.div`
  min-height: calc(100vh - 7rem);
  display: flex;
  flex-direction: column;
  justify-content: center;

  > header {
    margin-bottom: 2.5rem;

    > h1 {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors['primary-700']};
    }

    > p {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors['gray-800']};
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6rem;

    > img {
      flex: 1;
    }
  }
`;

export const DetailsContainer = styled.div`
  border-radius: 6px 36px;
  padding: 1px;
  background: ${({ theme }) =>
    `linear-gradient(
      to bottom right, 
      ${theme.colors['primary-500']}, 
      ${theme.colors['secondary-500']}
    )`};
  max-width: 33rem;
  width: 100%;
`;

export const Details = styled.ul`
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors['gray-100']};
  padding: 2.5rem;
`;

export const Detail = styled.li`
  list-style: none;
  display: flex;
  gap: 0.75rem;

  & + & {
    margin-top: 2rem;
  }
`;

export const DetailContent = styled.div`
  p {
    font-size: 1rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors['gray-700']};
  }

  strong {
    color: ${({ theme }) => theme.colors['gray-700']};
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: 700;
  }
`;

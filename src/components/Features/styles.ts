import styled from 'styled-components';

export const FeaturesContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 3.5rem;
  padding: 6rem 0;

  > div {
    max-width: 37rem;
  }

  > img {
    flex: 1;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    > img {
      width: 100%;
    }

    padding: 3rem 0;
  }
`;

export const Content = styled.div`
  > h1 {
    font-weight: 800;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  > p {
    font-size: 1.25rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    > h1 {
      font-weight: 800;
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    > p {
      font-size: 1.25rem;
    }
  }
`;

export const ContentFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-top: 4rem;

  > p {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${({ theme }) => theme.colors['gray-700']};

    &:nth-child(1) > span[color] {
      background-color: ${({ theme }) => theme.colors['primary-700']};
    }

    &:nth-child(2) > span[color] {
      background-color: ${({ theme }) => theme.colors['gray-700']};
    }

    &:nth-child(3) > span[color] {
      background-color: ${({ theme }) => theme.colors['primary-500']};
    }

    &:nth-child(4) > span[color] {
      background-color: ${({ theme }) => theme.colors['secondary-500']};
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

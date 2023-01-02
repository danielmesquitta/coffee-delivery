import styled from 'styled-components';

export const CoffeeListContainer = styled.section`
  padding: 2rem 0;

  > h2 {
    color: ${({ theme }) => theme.colors['gray-800']};
    font-size: 2rem;
  }

  > ul {
    padding: 4rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 2rem;
  }
`;

export const Card = styled.li`
  padding: 1.25rem;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors['gray-200']};
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -2.5rem;
  padding-bottom: 1rem;

  > img {
    margin-bottom: 0.75rem;
  }
`;

export const CardTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  > span {
    font-size: 0.625rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${({ theme }) => theme.colors['primary-700']};
    background-color: ${({ theme }) => theme.colors['primary-300']};
    border-radius: 999px;
    padding: 0.25rem 0.5rem;
  }
`;

export const CardContent = styled.div`
  padding-bottom: 2rem;
  text-align: center;
  flex: 1;

  > strong {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors['gray-800']};
  }

  > p {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors['gray-600']};
    font-size: 0.875rem;
  }
`;

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;

  > p {
    display: flex;
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.header};
    font-weight: 800;
    align-items: baseline;
    gap: 0.25rem;

    > small {
      font-family: ${({ theme }) => theme.fonts.text};
      font-size: 0.875rem;
      font-weight: 400;
    }
  }

  > button {
    width: 2.375rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${({ theme }) => theme.colors['secondary-700']};
    border-radius: 6px;
  }
`;

export const Controller = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors['gray-400']};
  border-radius: 6px;
  margin: 0 0.5rem 0 auto;
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

    &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['secondary-500']};
    }
  }
`;
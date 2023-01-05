import styled from 'styled-components';

export const DetailsFormContainer = styled.form`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['gray-200']};
  color: ${({ theme }) => theme.colors['gray-700']};
`;

export const Details = styled.ul``;

export const Detail = styled.li`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['gray-400']};
  margin-bottom: 2rem;

  > img {
    width: 4rem;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;

    > h3 {
      font-family: ${({ theme }) => theme.fonts['default']};
      color: ${({ theme }) => theme.colors['gray-800']};
      font-weight: 400;
      font-size: 1rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;

      strong {
        font-family: ${({ theme }) => theme.fonts['default']};
        font-weight: bold;
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Controllers = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-transform: uppercase;
    border-radius: 6px;
    padding: 0 0.5rem;
    border: 0;
    background: ${({ theme }) => theme.colors['gray-400']};
    color: ${({ theme }) => theme.colors['gray-700']};
    font-size: 0.75rem;
  }
`;

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

import styled from 'styled-components';

export const CoffeeListContainer = styled.section`
  padding: 2rem 0;

  > h2 {
    color: ${({ theme }) => theme.colors['gray-800']};
    font-size: 2rem;
  }

  ul {
    padding: 4rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 2rem;
  }
`;

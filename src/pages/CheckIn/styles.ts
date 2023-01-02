import styled from 'styled-components';

export const CheckInContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2.5rem 0;
`;

export const CheckInSection = styled.section`
  width: 100%;

  > div + div {
    margin-top: 0.75rem;
  }

  h2 {
    font-weight: 700;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  & + & {
    max-width: 28rem;
    min-width: 25rem;
  }
`;

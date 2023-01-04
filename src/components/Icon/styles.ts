import styled, { css } from 'styled-components';
import type { IconContainerProps } from './types';

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ backgroundColor, size }) => {
    if (backgroundColor) {
      return css`
        border-radius: 999px;
        min-width: ${size * 2}rem;
        width: ${size * 2}rem;
        height: ${size * 2}rem;
        background: ${backgroundColor};
      `;
    }

    return css`
      min-width: ${size}rem;
      width: ${size}rem;
      height: ${size}rem;
    `;
  }}
`;

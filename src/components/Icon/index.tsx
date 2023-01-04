import { defaultTheme } from '../../styles/themes/default';
import { IconContainer } from './styles';
import type { IconProps } from './types';

const { colors } = defaultTheme;

export const Icon = ({
  icon: IoniconsIcon,
  color,
  backgroundColor,
  size = 16,
}: IconProps) => {
  const sizeInRem = size / 16;

  return (
    <IconContainer size={sizeInRem} backgroundColor={backgroundColor}>
      <IoniconsIcon
        color={color || colors.white}
        width={`${sizeInRem}rem`}
        height={`${sizeInRem}rem`}
      />
    </IconContainer>
  );
};

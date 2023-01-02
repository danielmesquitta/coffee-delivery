import { Add, Remove } from 'react-ionicons';
import { defaultTheme } from '../../styles/themes/default';
import { Icon } from '../Icon';
import { AmountControllerContainer } from './styles';

const { colors } = defaultTheme;

export const AmountController = () => (
  <AmountControllerContainer>
    <button>
      <Icon icon={Remove} size={14} color={colors['secondary-500']} />
    </button>

    <input type="number" placeholder="0" />

    <button>
      <Icon icon={Add} size={14} color={colors['secondary-500']} />
    </button>
  </AmountControllerContainer>
);

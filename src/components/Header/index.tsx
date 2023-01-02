import { Cart, Location } from 'react-ionicons';
import { NavLink } from 'react-router-dom';
import { defaultTheme } from '../../styles/themes/default';
import { Icon } from '../Icon';
import { HeaderContainer } from './styles';

const { colors } = defaultTheme;

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src="/logo.svg" />
      </NavLink>

      <nav>
        <NavLink to="/address">
          <Icon icon={Location} size={22} color={colors['secondary-700']} />
          Uberlândia, MG
        </NavLink>

        <NavLink to="/check-in">
          <Icon icon={Cart} size={22} color={colors['primary-700']} />

          <span>3</span>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};

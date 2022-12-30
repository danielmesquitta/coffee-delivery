import { Cart, Location } from 'react-ionicons';
import { NavLink } from 'react-router-dom';
import { defaultTheme } from '../../styles/themes/default';
import { HeaderContainer } from './styles';

const { colors } = defaultTheme;

export const Header = () => {
  return (
    <HeaderContainer>
      <img src="/logo.svg" />

      <div>
        <span>
          <Location
            width="22px"
            height="22px"
            color={colors['secondary-700']}
          />
          {/**
           * @todo
           * Get user location with API
           */}
          Uberlândia, MG
        </span>

        <NavLink to="/check-in">
          <Cart width="22px" height="22px" color={colors['primary-700']} />
        </NavLink>
      </div>
    </HeaderContainer>
  );
};

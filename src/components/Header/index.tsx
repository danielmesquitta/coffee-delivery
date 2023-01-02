import { Cart, Location } from 'react-ionicons';
import { NavLink } from 'react-router-dom';
import { useProductsContext } from '../../contexts/products';
import { defaultTheme } from '../../styles/themes/default';
import { Icon } from '../Icon';
import { HeaderContainer } from './styles';

const { colors } = defaultTheme;

export const Header = () => {
  const { selectedProducts } = useProductsContext();

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

          <span>{selectedProducts.length}</span>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};

import { Cart, Location } from 'react-ionicons';
import { NavLink, useLocation } from 'react-router-dom';
import { Icon } from '~/components/Icon';
import { useCartContext } from '~/contexts/cart';
import { useUserContext } from '~/contexts/user';
import { defaultTheme } from '~/styles/themes/default';
import {
  AddressButton,
  CartButton,
  HeaderContainer,
  HeaderWrapper,
} from './styles';

const { colors } = defaultTheme;

export const Header = () => {
  const { pathname } = useLocation();

  const { cart } = useCartContext();

  const { address } = useUserContext();

  const cartIsDisabled = !cart.length;

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <NavLink to="/">
          <img src="/logo.svg" />
        </NavLink>

        <nav>
          <AddressButton to="/address">
            <Icon icon={Location} size={22} color={colors['secondary-700']} />
            {address?.city && address?.state
              ? `${address?.city}, ${address?.state}`
              : 'Selecione um endereço'}
          </AddressButton>

          <CartButton
            to={cartIsDisabled ? pathname : '/check-in'}
            disabled={cartIsDisabled}
          >
            <Icon
              icon={Cart}
              size={22}
              color={
                cartIsDisabled ? colors['gray-600'] : colors['primary-700']
              }
            />

            {Boolean(cart.length) && <span>{cart.length}</span>}
          </CartButton>
        </nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

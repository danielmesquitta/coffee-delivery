import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { Cart, Location } from 'react-ionicons';
import { NavLink, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Icon } from '~/components/Icon';
import { useUserContext } from '~/contexts/user';
import { cartStore } from '~/store/cart';
import { defaultTheme } from '~/styles/themes/default';
import {
  AddressButton,
  CartButton,
  HeaderContainer,
  HeaderWrapper,
} from './styles';

const { colors } = defaultTheme;

const { cart } = cartStore;

const HeaderComponent = () => {
  const { pathname } = useLocation();

  const { address } = useUserContext();

  const cartIsDisabled = !cart.length;

  const handleCartClick = useCallback(() => {
    if (cartIsDisabled) {
      toast.error('Seu carrinho está vazio!');
    }
  }, [cartIsDisabled]);

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
              : ''}
          </AddressButton>

          <CartButton
            to={cartIsDisabled ? pathname : '/check-in'}
            disabled={cartIsDisabled}
            onClick={handleCartClick}
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

export const Header = observer(HeaderComponent);

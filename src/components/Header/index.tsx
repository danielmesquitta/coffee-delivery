import { observer } from 'mobx-react';
import { useCallback } from 'react';
import { Cart, Location } from 'react-ionicons';
import { NavLink, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Icon } from '~/components/Icon';
import { cartStore } from '~/store/cart';
import { userStore } from '~/store/user';
import { defaultTheme } from '~/styles/themes/default';
import {
  AddressButton,
  CartButton,
  HeaderContainer,
  HeaderWrapper,
} from './styles';

const { colors } = defaultTheme;

export const Header = observer(() => {
  const { cart } = cartStore;
  const { address } = userStore;

  const cartIsEmpty = !cart.length;

  const { pathname } = useLocation();

  const handleCartClick = useCallback(() => {
    if (cartIsEmpty) {
      toast.error('Seu carrinho está vazio!');
    }
  }, [cartIsEmpty]);

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
            to={cartIsEmpty ? pathname : '/check-in'}
            disabled={cartIsEmpty}
            onClick={handleCartClick}
          >
            <Icon
              icon={Cart}
              size={22}
              color={cartIsEmpty ? colors['gray-600'] : colors['primary-700']}
            />

            {!cartIsEmpty && <span>{cart.length}</span>}
          </CartButton>
        </nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
});

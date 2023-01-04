import { Outlet } from 'react-router-dom';
import { Header } from '~/components/Header';
import { LayoutContainer } from './styles';

export const DefaultLayout = () => {
  return (
    <>
      <Header />

      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

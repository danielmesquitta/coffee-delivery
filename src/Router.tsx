import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '~/layouts/DefaultLayout';

const Address = lazy(() => import('~/pages/Address'));
const CheckIn = lazy(() => import('~/pages/CheckIn'));
const CheckInSuccess = lazy(() => import('~/pages/CheckInSuccess'));
const Home = lazy(() => import('~/pages/Home'));

export const Router: React.FC = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/address" element={<Address />} />
          <Route path="/check-in/success" element={<CheckInSuccess />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

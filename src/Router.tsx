import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '~/layouts/DefaultLayout';
import { Address } from '~/pages/Address';
import { CheckIn } from '~/pages/CheckIn';
import { CheckInSuccess } from '~/pages/CheckInSuccess';
import { Home } from '~/pages/Home';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/address" element={<Address />} />
        <Route path="/check-in/success" element={<CheckInSuccess />} />
      </Route>
    </Routes>
  );
};

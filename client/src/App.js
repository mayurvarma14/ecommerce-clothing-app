import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import './App.scss';

import { checkUserSession } from './redux/user/userActions';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'));
const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage'));
const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/shop/*" element={<ShopPage />} />
            <Route index path="/checkout" element={<CheckoutPage />} />
            <Route
              path="/signin"
              element={props.currentUser ? <Navigate to="/" /> : <AuthPage />}
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;

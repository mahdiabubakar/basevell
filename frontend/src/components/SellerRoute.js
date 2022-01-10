import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const SellerRoute = ({ children }) => {
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  return userInfo && userInfo.isSeller ? children : <Navigate to='/signin' />;
};

export default SellerRoute;

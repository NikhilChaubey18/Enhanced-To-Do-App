import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { Button } from 'react-bootstrap';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    dispatch(login());
  };

  return (
    <div className="text-center">
      <p>Please login to view your tasks.</p>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Login from './components/Login';
import Container from 'react-bootstrap/Container';
import { login } from './redux/authSlice';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      dispatch(login());
    }
  }, [dispatch]);

  return (
    <Container className="p-4">
      <h1 className="text-center">Enhanced To-Do App</h1>
      {isAuthenticated ? (
        <>
          <TaskInput />
          <TaskList />
        </>
      ) : (
        <Login />
      )}
    </Container>
  );
}

export default App;
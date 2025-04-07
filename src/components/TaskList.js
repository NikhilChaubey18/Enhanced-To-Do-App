import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../redux/tasksSlice';
import { logout } from '../redux/authSlice';
import { Card, Button } from 'react-bootstrap';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    dispatch(logout());
  };

  return (
    <div className="d-flex flex-column gap-3">
      <Button variant="secondary" onClick={handleLogout}>Logout</Button>
      {tasks.map((task) => (
        <Card key={task.id}>
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{task.text}</strong> ({task.type})
              {task.type === 'outdoor' && weather[task.id] && (
                <div className="text-muted small">
                  Weather: {weather[task.id].loading
                    ? 'Loading...'
                    : weather[task.id].error
                    ? 'Error loading weather'
                    : `${weather[task.id].data.temp}°C, ${weather[task.id].data.description}`}
                </div>
              )}
            </div>
            <Button variant="danger" onClick={() => dispatch(removeTask(task.id))}>Remove</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;

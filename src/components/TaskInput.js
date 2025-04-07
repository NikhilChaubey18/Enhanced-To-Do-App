import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { fetchWeather } from '../redux/weatherSlice';
import { Form, Button } from 'react-bootstrap';

const TaskInput = () => {
  const [text, setText] = useState('');
  const [type, setType] = useState('indoor');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      const task = { id: Date.now(), text, type };
      dispatch(addTask(task));
      if (type === 'outdoor') {
        dispatch(fetchWeather(task.id));
      }
      setText('');
    }
  };

  return (
    <Form className="d-flex gap-2 mb-3">
      <Form.Control
        placeholder="Enter task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>
      </Form.Select>
      <Button onClick={handleAdd}>Add</Button>
    </Form>
  );
};

export default TaskInput;
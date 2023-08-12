/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import '../css/Body.css';
import Button from './Button';
import Task from './Task';
import AddTask from './AddTask';

const Body = () => {
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(true);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <h2 className="lbl-btn">
        Task{' '}
        <Button
          color={showAddTask ? 'red' : 'green'}
          text={showAddTask ? 'Close' : 'Add'}
          onClick={() => setShowAddTask(!showAddTask)}
        />
      </h2>
      {showAddTask ? <AddTask onAdd={addTask} /> : ''}
      {tasks.length > 0 ? (
        <Task _tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks'
      )}
    </div>
  );
};

Body.propTypes = {};

export default Body;

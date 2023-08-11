/* eslint-disable no-unused-vars */
import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import '../css/Body.css';
import Button from './Button';
import Task from './Task';
import AddTask from './AddTask';

const Body = () => {
  const onClick = () => {
    window.alert('btn clicked');
  };

  const [showAddTask, setShowAddTask] = useState(true);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    window.alert('delete', id);
    console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    window.alert('dblCLicked', id);
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <h2 className="lbl-btn">
        Task{' '}
        <Button
          color={showAddTask ? 'red' : 'green'}
          text={showAddTask ? 'Close' : 'Add'}
          onClick={() => setShowAddTask(!showAddTask)}
          showAddBtn={showAddTask}
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

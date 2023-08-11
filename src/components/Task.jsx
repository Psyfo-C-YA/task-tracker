// import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../css/Task.css';

const Task = ({ _tasks, onDelete, onToggle }) => {
  return (
    <div>
      <ul>
        {_tasks.map((task) => {
          return (
            <li
              className={`tasks__container${task.reminder ? ' reminder' : ''}`}
              key={task.id}
              onDoubleClick={() => {
                onToggle(task.id);
              }}
              style={{ cursor: 'pointer' }}
            >
              <h3>{task.text}</h3>
              <p className="task__p">
                {task.day}{' '}
                <FaTimes
                  style={{ color: 'red', cursor: 'pointer' }}
                  onClick={() => onDelete(task.id)}
                />
              </p>
              <p>Reminder: {task.reminder ? 'Yes' : 'No'}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Task.propTypes = {
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
  _tasks: PropTypes.array,
  map: PropTypes.func,
  id: PropTypes.number,
  text: PropTypes.string,
  day: PropTypes.string,
  reminder: PropTypes.bool,
};

export default Task;

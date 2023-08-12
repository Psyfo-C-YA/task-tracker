// import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, color, onClick }) => {
  return (
    <button onClick={onClick} style={{ color: color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Add Task',
  color: 'steelblue',
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  showAddBtn: PropTypes.func,
};

export default Button;

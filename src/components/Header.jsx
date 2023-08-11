import '../css/Header.css';
import PropTypes from 'prop-types';

const Header = ({ title, name }) => {
  return (
    <header className="header">
      <h1 className="h1-color">{title}</h1>
      <h1 className="h1-color">{name}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
  name: 'Siya',
};

Header.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
};

export default Header;

// import React from 'react';
import '../css/Footer.css';
import PropTypes from 'prop-types';

const d = new Date();
let _year = d.getFullYear();

const Footer = ({ alias }) => {
  return (
    <footer className="footer">
      <p>
        {' '}
        {_year} © {alias}
      </p>
    </footer>
  );
};

Footer.defaultProps = {
  year: 2023,
  alias: 'Alex-Kid',
};

Footer.propTypes = {
  year: PropTypes.string,
  alias: PropTypes.string,
};

export default Footer;

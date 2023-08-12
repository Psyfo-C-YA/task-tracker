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
      <a href="/about">About</a>
    </footer>
  );
};

Footer.defaultProps = {
  year: 2023,
  alias: 'Alex-Kid',
};

Footer.propTypes = {
  year: PropTypes.number,
  alias: PropTypes.string,
};

export default Footer;

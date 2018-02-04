import React from 'react';
import { Link } from 'react-router-dom';

export default ({ children, options, pathname }) => (
  <Link to={{ pathname }}>
    {children}
  </Link>
);

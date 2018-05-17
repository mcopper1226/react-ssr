import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link to="/">React SSR</Link>
      <Link to="/post/lasagna">Post</Link>
      <Link to="/users">User</Link>
    </div>
  );
};

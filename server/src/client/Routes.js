import React from 'react';
import Home from './pages/Home';
import UsersList from './pages/UsersList';
import Post from './pages/Post';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      },
      {
        ...UsersList,
        path: '/users'
      },
      {
        ...Post,
        path: '/post/:id'
      }
    ]
  }
];

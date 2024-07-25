import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import HomePage from '../pages/HomePage/HomePage';
import Contact from '../pages/Contact/Contact';

// On va avoir dans cette variable un tableau de routes (objets)

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;

import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

import { GlobalStyles } from './global/styles';

export function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <GlobalStyles />
    </React.Fragment>
  )
}
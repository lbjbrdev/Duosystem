import React from 'react';

import { GlobalStyles } from './global/styles';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

export function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <GlobalStyles />
    </React.Fragment>
  )
}
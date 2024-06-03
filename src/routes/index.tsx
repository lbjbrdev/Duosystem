import { createBrowserRouter } from 'react-router-dom';

import { SignIn } from '../pages/signIn';
import { Home } from '../pages/home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <SignIn />
    },
    {
        path: '/home',
        element: <Home />
    },
]);
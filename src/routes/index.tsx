import { createBrowserRouter } from 'react-router-dom';

import { SignIn } from '../pages/signIn';
import { Home } from '../pages/home';
import { Register } from '../pages/register';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <SignIn />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/register',
        element: <Register />
    }
]);
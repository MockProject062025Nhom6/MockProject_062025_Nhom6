import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'
import LandingPage from '@/pages/landing/LandingPage'
import { createBrowserRouter } from 'react-router-dom'

const AppRoutes = createBrowserRouter([{
    path: '/',
    children: [
        {
            path: '/login',
            element: <LoginPage />,
        },
        {
            path: '/register',
            element: <RegisterPage />,
        },
        {
            path: '/',
            element: <LandingPage/>
        }

    ]
}])


export default AppRoutes
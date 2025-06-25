import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'
import InterviewPage from '@/pages/interview/InterviewPage'
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
            path: '/interviews',
            element: <InterviewPage />,
        },
        

]
}])


export default AppRoutes
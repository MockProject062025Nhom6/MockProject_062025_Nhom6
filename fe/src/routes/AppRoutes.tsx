import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'
import InvestigationResults from '@/pages/investigation/InvestigationResultsPage'
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
            path: '/investigation',
            element: <InvestigationResults />,
        }



    ]
}])


export default AppRoutes
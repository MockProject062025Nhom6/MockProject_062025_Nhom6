import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'
import WattingProcessCase from '@/pages/case/WattingProcessCase'
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
    }
    , {
      path: '/case/wattingprocesscase',
      element: <WattingProcessCase />
    }

  ]
}])


export default AppRoutes
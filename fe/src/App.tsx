import { RouterProvider } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux';
import { store } from './redux/store.ts'

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={AppRoutes} />
      </QueryClientProvider>
    </Provider >
  )
}
export default App

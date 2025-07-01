import { RouterProvider } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <>
      <RouterProvider router={AppRoutes} />
      <ToastContainer />
    </>
  )
}

export default App

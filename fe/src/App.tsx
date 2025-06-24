<<<<<<< HEAD
import { RouterProvider } from "react-router"
import router from "./routes/AppRoutes"

function App() {
  return <RouterProvider router={router} />
=======
import { RouterProvider } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return <RouterProvider router={AppRoutes} />

>>>>>>> 4cdbe3ae2ff38a37f2aba2fa423bde80e66a6fdc
}

export default App

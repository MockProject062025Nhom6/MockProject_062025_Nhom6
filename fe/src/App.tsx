import React, { useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Provider } from "react-redux"

import { store } from "./store"
import AppRouter from "./routes/AppRouter"
import { useAppDispatch, useAppSelector } from "./store"
import { getCurrentUser } from "./store/slices/authSlice"
import { queryClient } from "./services/queryClient"

const AppContent: React.FC = () => {
  const dispatch = useAppDispatch()
  const { token, isAuthenticated } = useAppSelector((state) => state.auth)

  useEffect(() => {
    if (token && !isAuthenticated) {
      dispatch(getCurrentUser())
    }
  }, [dispatch, token, isAuthenticated])

  return (
    <Router>
      <AppRouter />
      {/* <Toaster position="top-right" /> */}
    </Router>
  )
}

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  )
}

export default App

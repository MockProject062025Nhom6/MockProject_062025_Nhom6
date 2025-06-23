import React, { Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

// Layout components
import DefaultLayout from "../layouts/DefaultLayout"
import AuthLayout from "../layouts/AuthLayout"
import AdminLayout from "../layouts/AdminLayout"
import Loading from "@/components/loading"
import { routeConfig } from "./RouteConfig"
import AuthGuard from "@/components/ui/guards/AuthGuard"
import RoleGuard from "@/components/ui/guards/RoleGuard"
import { AppPaths } from "@/types/path"

const getLayout = (layoutType: string = "default") => {
  switch (layoutType) {
    case "auth":
      return AuthLayout
    case "admin":
      return AdminLayout
    default:
      return DefaultLayout
  }
}

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routeConfig.map((route) => {
          const Layout = getLayout(route.layout)
          const Component = route.element

          let element = (
            <Layout>
              <Component />
            </Layout>
          )

          // Apply auth guard if required
          if (route.requiresAuth) {
            element = <AuthGuard>{element}</AuthGuard>
          }

          // Apply role guard if roles/permissions specified
          if (route.allowedRoles || route.requiredPermissions) {
            element = (
              <RoleGuard
                allowedRoles={route.allowedRoles}
                requiredPermissions={route.requiredPermissions}
              >
                {element}
              </RoleGuard>
            )
          }

          return <Route key={route.path} path={route.path} element={element} />
        })}

        {/* Catch all route - redirect to 404 */}
        <Route
          path="*"
          element={<Navigate to={AppPaths.NOT_FOUND} replace />}
        />
      </Routes>
    </Suspense>
  )
}

export default AppRouter

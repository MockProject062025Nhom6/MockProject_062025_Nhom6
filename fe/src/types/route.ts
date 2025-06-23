import type React from "react"
import type { ILayout } from "./layout"
import type { IPermission, IUserRole } from "./role"
import type { IAppPaths } from "./path"

export interface RouteConfig {
  path: IAppPaths
  element: React.ComponentType
  layout?: ILayout
  requiresAuth?: boolean
  allowedRoles?: IUserRole[]
  requiredPermissions?: IPermission[]
  title?: string
  breadcrumb?: string
}

export interface LayoutProps {
  children: React.ReactNode
}

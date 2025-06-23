// Lazy load components
import { Layout } from "@/types/layout"
import { AppPaths } from "@/types/path"
import { Permission, UserRole } from "@/types/role"
import type { RouteConfig } from "@/types/route"
import { lazy } from "react"

const HomePage = lazy(() => import("@/pages/home/HomePage"))
const LoginPage = lazy(() => import("@/pages/auth/login/LoginPage"))
const RegisterPage = lazy(() => import("@/pages/auth/RegisterPage"))
const DashboardPage = lazy(() => import("@/pages/dashboard/DashboardPage"))
const ProfilePage = lazy(() => import("@/pages/user/ProfilePage"))

// Admin pages
const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboard"))
const AdminUsers = lazy(() => import("@/pages/admin/AdminUser"))
const AdminSettings = lazy(() => import("@/pages/admin/AdminSetting"))

// Error pages
const NotFoundPage = lazy(() => import("@/pages/errors/NotFoundPage"))
const UnauthorizedPage = lazy(() => import("@/pages/errors/UnauthorizedPage"))
const ForbiddenPage = lazy(() => import("@/pages/errors/ForbiddenPage"))

export const routeConfig: RouteConfig[] = [
  // Public routes
  {
    path: AppPaths.HOME,
    element: HomePage,
    layout: Layout.DEFAULT,
    title: "Home",
  },
  {
    path: AppPaths.LOGIN,
    element: LoginPage,
    layout: Layout.AUTH,
    title: "Login",
  },
  {
    path: AppPaths.REGISTER,
    element: RegisterPage,
    layout: Layout.AUTH,
    title: "Register",
  },

  // Protected routes
  {
    path: AppPaths.DASHBOARD,
    element: DashboardPage,
    layout: Layout.DEFAULT,
    requiresAuth: true,
    title: "Dashboard",
    breadcrumb: "Dashboard",
  },
  {
    path: AppPaths.PROFILE,
    element: ProfilePage,
    layout: Layout.DEFAULT,
    requiresAuth: true,
    title: "Profile",
    breadcrumb: "Profile",
  },

  // Admin routes
  {
    path: AppPaths.ADMIN_DASHBOARD,
    element: AdminDashboard,
    layout: Layout.ADMIN,
    requiresAuth: true,
    allowedRoles: [UserRole.ADMIN],
    title: "Admin Dashboard",
    breadcrumb: "Admin Dashboard",
  },
  {
    path: AppPaths.ADMIN_USERS,
    element: AdminUsers,
    layout: Layout.ADMIN,
    requiresAuth: true,
    allowedRoles: [UserRole.ADMIN],
    requiredPermissions: [Permission.READ_USERS],
    title: "User Management",
    breadcrumb: "Users",
  },
  {
    path: AppPaths.ADMIN_SETTINGS,
    element: AdminSettings,
    layout: Layout.ADMIN,
    requiresAuth: true,
    allowedRoles: [UserRole.ADMIN],
    requiredPermissions: [Permission.MANAGE_SETTINGS],
    title: "Admin Settings",
    breadcrumb: "Settings",
  },

  // Error routes
  {
    path: AppPaths.NOT_FOUND,
    element: NotFoundPage,
    layout: Layout.DEFAULT,
    title: "Page Not Found",
  },
  {
    path: AppPaths.UNAUTHORIZED,
    element: UnauthorizedPage,
    layout: Layout.DEFAULT,
    title: "Unauthorized",
  },
  {
    path: AppPaths.FORBIDDEN,
    element: ForbiddenPage,
    layout: Layout.DEFAULT,
    title: "Forbidden",
  },
]

export const AppPaths = {
  // Public routes
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",

  // Protected routes
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  SETTINGS: "/settings",

  // Admin routes
  ADMIN_DASHBOARD: "/admin",
  ADMIN_USERS: "/admin/users",
  ADMIN_SETTINGS: "/admin/settings",
  ADMIN_ANALYTICS: "/admin/analytics",

  // User routes

  // Error pages
  NOT_FOUND: "/404",
  UNAUTHORIZED: "/401",
  FORBIDDEN: "/403",
  SERVER_ERROR: "/500",
} as const

export type IAppPaths = (typeof AppPaths)[keyof typeof AppPaths]

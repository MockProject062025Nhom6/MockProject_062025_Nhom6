export const UserRole = {
  ADMIN: "admin",
  USER: "user",
} as const
export type IUserRole = (typeof UserRole)[keyof typeof UserRole]

export const Permission = {
  // User permissions
  READ_PROFILE: "read:profile",
  UPDATE_PROFILE: "update:profile",

  // Admin permissions
  READ_USERS: "read:users",
  CREATE_USERS: "create:users",
  UPDATE_USERS: "update:users",
  DELETE_USERS: "delete:users",

  // System permissions
  MANAGE_SETTINGS: "manage:settings",
  VIEW_ANALYTICS: "view:analytics",
} as const
export type IPermission = (typeof Permission)[keyof typeof Permission]

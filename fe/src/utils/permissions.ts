import { ROLE_PERMISSIONS } from "@/constants/role"
import type { IPermission, IUserRole } from "@/types/role"
import type { IUser } from "@/types/user"

export const hasRole = (user: IUser | null, role: IUserRole): boolean => {
  return user?.role === role
}

export const hasAnyRole = (user: IUser | null, roles: IUserRole[]): boolean => {
  return user ? roles.includes(user.role) : false
}

export const hasPermission = (
  user: IUser | null,
  permission: IPermission
): boolean => {
  if (!user) return false
  return (
    user.permissions.includes(permission) ||
    ROLE_PERMISSIONS[user.role].includes(permission)
  )
}

export const hasAnyPermission = (
  user: IUser | null,
  permissions: IPermission[]
): boolean => {
  if (!user) return false
  return permissions.some((permission) => hasPermission(user, permission))
}

export const hasAllPermissions = (
  user: IUser | null,
  permissions: IPermission[]
): boolean => {
  if (!user) return false
  return permissions.every((permission) => hasPermission(user, permission))
}

export const canAccessRoute = (
  user: IUser | null,
  allowedRoles?: IUserRole[],
  requiredPermissions?: IPermission[]
): boolean => {
  if (!user) return false

  if (allowedRoles && !hasAnyRole(user, allowedRoles)) {
    return false
  }

  if (requiredPermissions && !hasAllPermissions(user, requiredPermissions)) {
    return false
  }

  return true
}

import {
  Permission,
  UserRole,
  type TPermission,
  type TUserRole,
} from "@/types/role"

export const ROLE_PERMISSIONS: Record<TUserRole, TPermission[]> = {
  [UserRole.ADMIN]: [
    Permission.READ_PROFILE,
    Permission.UPDATE_PROFILE,
    Permission.READ_USERS,
    Permission.CREATE_USERS,
    Permission.UPDATE_USERS,
    Permission.DELETE_USERS,
    Permission.MANAGE_SETTINGS,
    Permission.VIEW_ANALYTICS,
  ],
  [UserRole.USER]: [Permission.READ_PROFILE, Permission.UPDATE_PROFILE],
}

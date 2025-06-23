import { useAppSelector } from "@/store"
import { AppPaths, type IAppPaths } from "@/types/path"
import type { IPermission, IUserRole } from "@/types/role"
import { canAccessRoute } from "@/utils/permissions"
import { Navigate } from "react-router-dom"

interface RoleGuardProps {
  children: React.ReactNode
  allowedRoles?: IUserRole[]
  requiredPermissions?: IPermission[]
  fallbackPath?: IAppPaths
}

const RoleGuard = ({
  children,
  allowedRoles,
  requiredPermissions,
  fallbackPath = AppPaths.FORBIDDEN,
}: RoleGuardProps) => {
  const { user } = useAppSelector((state) => state.auth)

  const hasAccess = canAccessRoute(user, allowedRoles, requiredPermissions)

  if (!hasAccess) {
    return <Navigate to={fallbackPath} replace />
  }

  return <>{children}</>
}

export default RoleGuard

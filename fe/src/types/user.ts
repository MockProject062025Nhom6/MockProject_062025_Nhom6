import type { IMetaData } from "./api"
import type { IPermission, IUserRole } from "./role"

export interface IUser extends IMetaData {
  email: string
  firstName: string
  lastName: string
  role: IUserRole
  permissions: IPermission[]
  avatar?: string
  isActive: boolean
}

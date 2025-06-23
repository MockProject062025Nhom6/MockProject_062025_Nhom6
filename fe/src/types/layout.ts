export const Layout = {
  DEFAULT: "DEFAULT",
  AUTH: "AUTH",
  ADMIN: "ADMIN",
} as const

export type ILayout = (typeof Layout)[keyof typeof Layout]

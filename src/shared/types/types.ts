import { ReactNode } from "react"

export type FormFields = {
  login: string
  email: string
  password: string
}

export type ListItemProps = {
  text: string
  icon: string
}
export type PopUpProps = {
  children: ReactNode[]
}

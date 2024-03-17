import { ReactNode } from 'react'

export const PopUpWrapper = ({ children }: ReactNode) => {
  return (
    <ul className="inline-block  text-gray-700  p-5 shadow-secondary bg-gray-300 rounded-3xl">
      {children}
    </ul>
  )
}

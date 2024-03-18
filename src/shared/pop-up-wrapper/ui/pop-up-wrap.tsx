import { PopUpProps } from '../../types/types'

export const PopUpWrapper = ({ children }: PopUpProps) => {
  return (
    <ul className="inline-block  text-gray-700  p-5 shadow-secondary bg-gray-300 rounded-3xl">
      {children}
    </ul>
  )
}

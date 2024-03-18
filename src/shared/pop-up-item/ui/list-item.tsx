import { ListItemProps } from '../../types/types'

export const ListItem = ({ text, icon }: ListItemProps) => {
  return (
    <li
      key={text}
      className="cursor-pointer hover:scale-105 flex gap-3 items-center"
    >
      <img src={icon} alt="" />
      <span className={text === 'Delete' ? 'text-red' : ''}>{text}</span>
    </li>
  )
}

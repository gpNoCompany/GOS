type ListItemProps = {
  text: string
  icon: string
}

export const ListItem = ({ text, icon }:ListItemProps) => {
  return (
    <li
      className="cursor-pointer hover:scale-105 flex gap-3 items-center"
      key={text}
    >
      <img src={icon} alt="" />
      <span className={text === 'Delete' ? 'text-red' : ''}>{text}</span>
    </li>
  )
}

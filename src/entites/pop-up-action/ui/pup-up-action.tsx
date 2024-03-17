import { PopUpWrapper } from '../../../shared/pop-up-wrapper/ui'
import { items } from '../model/list-items'

export const PopUpAction = () => {
  return (
    <PopUpWrapper>
      {items.map((item) => {
        return (
          <li
            className="cursor-pointer hover:scale-105 flex gap-3 items-center"
            key={item.text}
          >
            <img src={item.icon} alt="" />
            <span className={item.text === 'Delete' ? 'text-red' : ''}>
              {item.text}
            </span>
          </li>
        )
      })}
    </PopUpWrapper>
  )
}

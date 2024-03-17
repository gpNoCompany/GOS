import { ListItem } from '../../../shared/pop-up-item/list-item'
import { PopUpWrapper } from '../../../shared/pop-up-wrapper/ui'
import { items } from '../model/list-items'

export const PopUpAction = () => {
  return (
    <PopUpWrapper>
      {items.map((item) => {
        return <ListItem text={item.text} icon={item.icon} />
      })}
    </PopUpWrapper>
  )
}

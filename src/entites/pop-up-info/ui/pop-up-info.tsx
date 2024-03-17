import { ListItem } from '../../../shared/pop-up-item/ui/list-item'
import { PopUpWrapper } from '../../../shared/pop-up-wrapper/ui/pop-up-wrap'
import { items } from '../model/items'

export const PopUpInfo = () => {
  return (
    <PopUpWrapper>
      {items.map((item) => {
        return <ListItem key={item.text} text={item.text} icon={item.icon} />
      })}
    </PopUpWrapper>
  )
}

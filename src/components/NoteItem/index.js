// Write your code here
import {ListItem, ItemHead, ItemPara} from './styledComponents'

const NoteItem = props => {
  const {itemDetails} = props
  const {title, note} = itemDetails
  return (
    <ListItem>
      <ItemHead>{title}</ItemHead>
      <ItemPara>{note} </ItemPara>
    </ListItem>
  )
}

export default NoteItem

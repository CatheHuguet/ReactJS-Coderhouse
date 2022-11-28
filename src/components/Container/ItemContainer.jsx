import Form from "../Form/Form"
import Title from "../Title/Title"
import './ItemContainer.css'

const ItemContainer = ({greeting}) => {
  return (
    <div>
        <h2>{greeting}</h2>
    </div>
  )
}

export default ItemContainer
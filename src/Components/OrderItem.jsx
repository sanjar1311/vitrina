import {useContext} from 'react'
import {ShopContext} from '../context'

function OrderItem(props) {
  const {name, price, id, quantity } = props
  const { addItem, deleteItems, deleteOrder} = useContext(ShopContext)

  return(
    <li className="collection-item">
      <span>{name} x {quantity} = ${price * quantity}</span>
      <div>
        <button className="btn" onClick={()=> addItem({name, price, quantity, id})}>+1 ADD</button>
        <button className="btn" onClick={()=> deleteItems({name, price, quantity, id})} >-1 DELETE</button>
        <button className="material-icons btn" onClick={()=> deleteOrder(id)}>delete</button>
      </div>
    </li>
  )
}

export default OrderItem
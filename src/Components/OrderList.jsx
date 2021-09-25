import {useState, useEffect, useContext} from 'react'
import { ShopContext } from '../context'

import OrderItem from "./OrderItem"

function OrderList(props) {

  const { order = [] } = props

  const { setShowOrder } = useContext(ShopContext)

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(()=> {
    let totalVal = 0
    order.map(orderItem => {
      return totalVal += orderItem.price * orderItem.quantity
    })
    setTotalPrice(totalVal)
  }, [order])

  return(
    <ul className="collection basket-list">
      <li className="collection-item active">
        <span>Goods</span>
        <button className="modal-close" onClick={setShowOrder}>x</button>
      </li>
      {
        order.length ? order.map(orderItem => (
          <OrderItem key={orderItem.id} {...orderItem} />
        )) : <li className="collection-item">Basket is empty.</li>
      }
      <li className="collection-item active">Total Price: &nbsp;<b>${totalPrice}</b></li>
    </ul>
  )
}

export default OrderList
import {useContext} from "react"
import {ShopContext} from "../context"

function Cart () {
  const {setShowOrder, order} = useContext(ShopContext)
  const quantity = order.length
  return(
    <div className="cart " onClick={setShowOrder}>
      {/* <a class="btn-floating btn-large cyan pulse"><i class="material-icons">edit</i></a> */}
      <i className="material-icons">shopping_cart</i>
      {
        quantity ? (
          <span className="cart-quantity">{quantity}</span> ) : (
            <span className="cart-quantity">0</span>
          )
      }
      
    </div>
  )
}

export default Cart
function Cart ({quantity, setShowOrder}) {
  return(
    <div className="cart " onClick={()=> setShowOrder(prev => prev = !prev)}>
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
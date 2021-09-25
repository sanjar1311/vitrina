import { useContext } from "react"
import {ShopContext} from '../context'

function GoodsItem(props) {

  const {addToBasket} = useContext(ShopContext)

  const { full_background, name, description, id, price } = props

  return(
    <div className="card card-el">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action card-el__card-action">
        <button
          className="btn"
          onClick={() => addToBasket({name, id, price})}
        >
        <i className="material-icons">add_shopping_cart</i>
        </button>
        <span style={{fontSize: "1.8rem"}}>${price}</span>
      </div>
    </div>
  )
}

export default GoodsItem
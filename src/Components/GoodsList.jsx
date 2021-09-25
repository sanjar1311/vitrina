import { useContext } from "react"
import { ShopContext } from "../context"

import GoodsItem from "./GoodsItem"

function GoodsList() {
  const {goods = []} = useContext(ShopContext)
  return(
    <ul className="goods">
      {
        goods.length ? ( goods.map(item => {
          return <GoodsItem key={item.id} {...item}/>
        })) : <h1>Nothing here</h1>
      }
    </ul>
  )
}

export default GoodsList
import GoodsItem from "./GoodsItem"

function GoodsList({goods = [], addCart}) {
  return(
    <ul className="goods">
      {
        goods.length ? ( goods.map(item => {
          return <GoodsItem key={item.id} {...item} addCart={addCart}/>
        })) : <h1>Nothing here</h1>
      }
    </ul>
  )
}

export default GoodsList
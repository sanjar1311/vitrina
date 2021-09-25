import { createContext, useReducer } from "react";
import reducer from './reducer'

const ShopContext = createContext()

const initialValue = {
  goods: [],
  order: [],
  isLoading: true,
  showOrder: false
}

function ContextProvider({children}) {

  const [value, dispatch] = useReducer(reducer, initialValue)

  value.addToBasket = (items) => dispatch({type: "ADD_TO_CARD", payload: items})
  value.addItem = (items) => dispatch({type: "ADD_ITEM", payload: items})
  value.deleteItems = (items) => dispatch({type: "DELETE_ITEM", payload: items})
  value.deleteOrder = (id) => dispatch({type: "DELETE_ORDER", payload: id})
  value.setShowOrder = () => dispatch({type: "SHOW_ORDER"})
  value.setGoods = (data) => dispatch({type: "SET_GOODS", payload: data})

  return(
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}

export {
  ShopContext,
  ContextProvider
}
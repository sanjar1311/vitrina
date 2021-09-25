import { toast } from 'react-toastify'

function reducer(state, {type, payload}) {
  switch (type) {
    case "ADD_TO_CARD" : {
      const itemIndex = state.order.findIndex(item => item.id === payload.id)
      let newOrder = null
      if(itemIndex < 0) {
        const newObj = {
          ...payload,
          quantity: 1
        }
        newOrder = [...state.order, newObj]
        toast.success('Goods added!');
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if(itemIndex === index) {
            return{
              ...orderItem,
              quantity: orderItem.quantity + 1
            }
          } else {
            return orderItem
          }
        })
        toast.success('Goods added!');
      }
      return {
        ...state,
        order: newOrder
      }
    }
    case "ADD_ITEM": {
      let newOrder = state.order.map(orderItem => {
        if(payload.id === orderItem.id) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem
        }
      })
      return {
        ...state,
        order: newOrder
      }
    }
    case "DELETE_ITEM": {
      let newOrder = state.order.map(orderItem => {
        if(payload.id === orderItem.id && orderItem.quantity > 1) {
          return {
            ...orderItem,
            quantity: orderItem.quantity - 1
          }
        } else {
          return orderItem
        }
      })
      return {
        ...state,
        order: newOrder
      }
    }
    case "DELETE_ORDER":{
      let newOrder = state.order.filter(orderItem => orderItem.id !== payload)
      toast.error('Goods deleted!');
      return {
        ...state,
        order: newOrder
      }
    }
    case "SHOW_ORDER": {
      return {
        ...state,
        showOrder: !state.showOrder
      }
    }
    case "SET_GOODS": {
      return {
        ...state,
        goods: payload,
        isLoading: false
      }
    }
    default :
      return state
  }
    
}

export default reducer
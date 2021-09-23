import { useState, useEffect } from 'react'

import { toast } from 'react-toastify'

import { API_URL, API_KEY } from './config.js'
import GoodsList from './Components/GoodsList'
import Loader from './Components/Loader'
import Cart from './Components/Cart'
import OrderList from './Components/OrderList.jsx'

import { ToastContainer } from 'react-toastify';

import Header from './Components/Header/Header'
import Footer from './Components/Footer'

import './App.css';

function App() {

  const [goods, setGoods] = useState([])
  const [order, setOrder] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showOrder, setShowOrder] = useState(false)

  useEffect(()=> {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY
      }
    })
    .then(res => res.json())
    .then(data => {
      setGoods(data.featured)
      setIsLoading(false)
    })
  },[])

  function addCart(items) {
    const itemIndex = order.findIndex(item => item.id === items.id)
    if(itemIndex < 0) {
      const newObj = {
        ...items,
        quantity: 1
      }
      setOrder([...order, newObj])
    } else {
      const newOrder = order.map((orderItem, index) => {
        if(itemIndex === index) {
          return{
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem
        }
      })
      setOrder(newOrder)
    }
    toast.success('Goods added!');
  }

  function addItem(items) {
    // const itemIndex = order.findIndex(item => item.id === items.id)
    const newOrder = order.map(orderItem => {
      if(items.id === orderItem.id) {
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1
        }
      } else {
        return orderItem
      }
    })
    setOrder(newOrder)
  }

  function deleteItems(items) {
    const newOrder = order.map(orderItem => {
      if(items.id === orderItem.id && orderItem.quantity > 1) {
        return {
          ...orderItem,
          quantity: orderItem.quantity - 1
        }
      } else {
        return orderItem
      }
    })
    setOrder(newOrder)
  }

  function deleteOrder(id) {
    const newOrder = order.filter(orderItem => orderItem.id !== id)
    setOrder(newOrder)
    toast.error('Goods deleted!');
  }
 

  return (
    <>
      <ToastContainer />
      <Header
        quantity={order.length}
        setShowOrder={setShowOrder}
      />
      <>
      <div className="content container">
        {/* <h1>{totalPrice}</h1> */}

        {
          showOrder && <OrderList
                          order={order}
                          setShowOrder={setShowOrder}
                          addItem={addItem}
                          deleteItems={deleteItems}
                          deleteOrder={deleteOrder}
                        />
        }
        {
          isLoading ? <Loader /> : (
            <GoodsList
              goods={goods}
              addCart={addCart}
            />
          )
        }
      </div>
    </>
      <Footer />
    </>
  );
}

export default App;

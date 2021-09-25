import { useEffect, useContext } from 'react'
import { ShopContext } from './context.js'

import { API_URL, API_KEY } from './config.js'
import GoodsList from './Components/GoodsList'
import Loader from './Components/Loader'
import OrderList from './Components/OrderList.jsx'

import { ToastContainer } from 'react-toastify';

import Header from './Components/Header/Header'
import Footer from './Components/Footer'

import './App.css';

function App() {

  const {showOrder, setGoods, goods, isLoading, order} = useContext(ShopContext)


  useEffect(()=> {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY
      }
    })
    .then(res => res.json())
    .then(data => setGoods(data.featured))
  },[setGoods])
 

  return (
    <>
      <ToastContainer />
      <Header
        quantity={order.length}
      />
      <>
      <div className="content container">

        {
          showOrder && <OrderList
                          order={order}
                        />
        }
        {
          isLoading ? <Loader /> : (
            <GoodsList
              goods={goods}
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

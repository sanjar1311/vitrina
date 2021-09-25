import Cart from "../Cart"

import "./Header.css"

function Header({quantity, setShowOrder}) {
  return(
  <header className="header header--fixed">
    <div className="container header-inner">
      <h2 className="site-title">Market</h2>
      <div className="header__right-side">
        <Cart
          quantity={quantity}
          setShowOrder={setShowOrder}
        />
        <button className="header__favourite-btn buttons">
          <i className="material-icons">favorite_border</i>
        </button>
        <button className="buttons header__account-btn">
          <i className="material-icons">account_circle</i>
        </button>
      </div>
    </div>
  </header>
  )
}
export default Header
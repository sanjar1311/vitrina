import { createContext } from "react";

const ShopContext = createContext()

function ContextProvider({children}) {
  return(
    <ShopContext.Provider>
      {children}
    </ShopContext.Provider>
  )
}

export {
  ShopContext,
  ContextProvider
}
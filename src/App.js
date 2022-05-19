import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartItemContext } from "./Helper/Context";
import Cart from "./Pages/Cart/Cart";
import FormExample from "./Pages/Examples/FormExample";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  const [cartItem, setCartItem] = useState(1)
  return (
    <BrowserRouter>
      <CartItemContext.Provider value={{cartItem, setCartItem}}>
          <div className="App">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/form" element={<FormExample />} />
              
            </Routes>
          </div>
      </CartItemContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './component/CheckOut/CheckOut';
import Home from './component/Home/Home';
import OrderSummary from './component/OrderSummary/OrderSummary';
import ShoppingCart from './component/ShoppingCart/ShoppingCart';
import ShoppingItemList from './component/ShoppingItemList/ShoppingItemList';
import { CartItemProvider } from './Context/CartItemContext';


function App() {
  return (
      <CartItemProvider>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/OrderSummary" element={<OrderSummary />} />
              <Route path="/CheckOut" element={<Checkout />} />
              <Route path="/ShoppingCart'" element={<ShoppingCart />} />
              <Route path="/ShoppingItemList" element={<ShoppingItemList />}>
              </Route>
            </Routes>
          </Router>
        </div>
      </CartItemProvider>
    //<CartProvider>
    // </CartProvider>
  );
}
export default App;

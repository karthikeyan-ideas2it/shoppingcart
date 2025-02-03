import logo from './logo.svg';
import './App.css';
import ShoppingCart from './component/ShoppingCart/ShoppingCart';
import ShoppingItemList from './component/ShoppingItemList/ShoppingItemList';
import NavBar from './component/NavBar/NavBar';
import { CartProvider } from '../src/CartContext';
function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1 className="text-center">Shopping Cart</h1>
        <br></br>
        <div className="row">
          <div className="col-8">
          <ShoppingItemList/>
          </div>
          <div className="col-4">
            <ShoppingCart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}
export default App;

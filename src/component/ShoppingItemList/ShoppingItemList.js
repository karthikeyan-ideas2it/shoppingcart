import React ,{ useState }from "react"


const ShoppingItemList = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 20.00, quantity: 1, image: 'https://designmodo.static.domains/shopping-cart/item-3.png' },
        { id: 2, name: 'Product 2', price: 35.00, quantity: 1, image: 'https://designmodo.static.domains/shopping-cart/item-1.png' },
        { id: 3, name: 'Product 3', price: 35.00, quantity: 1, image: 'https://designmodo.static.domains/shopping-cart/item-2.png' },
        { id: 4, name: 'Product 4', price: 45.00, quantity: 1, image: 'https://designmodo.static.domains/shopping-cart/item-3.png' },
        { id: 5, name: 'Product 5', price: 55.00, quantity: 1, image: 'https://designmodo.static.domains/shopping-cart/item-1.png' },
        { id: 6, name: 'Product 6', price: 35.00, quantity: 1, image: 'https://designmodo.static.domains/shopping-cart/item-2.png' }
        
    ]);

      const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
      };
    
      const handleQuantityChange = (id, newQuantity) => {
        setCartItems(cartItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        ));
      };
    
      const calculateTotalPrice = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
      };
  return (
   <div>
        <h1>Your Shopping Cart</h1>
        <div className="card-list">
      {cartItems.map((cartItem) => (
        <div key={cartItem.id} className="card">
          <h3 className="card-title">{cartItem.name}</h3>
          <p className="card-description">{cartItem.price}</p>
        </div>
      ))}
    </div>
     </div>
  )
};

export default ShoppingItemList;

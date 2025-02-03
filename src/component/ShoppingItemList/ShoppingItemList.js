import React ,{ useState,useEffect  }from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "../Product/Product";
import { useCart } from '../../CartContext';

const ShoppingItemList = () => {
    const [products, setproducts] = useState([]);
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setproducts(data);
        console.log(data);
      } catch (err) {
        //setError(err.message);
      } finally {
        //setLoading(false);
      }
    };
    useEffect(() => {
      fetchProducts();
  }, []);
  return (
    <div>
      <div className="container">
      <div className="row">
      {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ShoppingItemList;

import React ,{ useState,useEffect  }from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "../Product/Product";
import useFetchData from "../../Customhooks/useFetchData";

const ShoppingItemList = ({selectedCategory}) => {
    const [products, setproducts] = useState([]);
    var url;

      if(selectedCategory!==null && selectedCategory !== ''){
        const { name } = selectedCategory;
        url=`https://fakestoreapi.com/products/category/${name}`
      }
      else{
        url=`https://fakestoreapi.com/products`
      }
     console.log(url)
    const { items, loading, error } = useFetchData(url);

    const FetchProducts =  () => {
       if (loading) {
        return <div>Loading...</div>;
      }
      if (error) {
        return <div>Error: {error}</div>;
      }
       setproducts(items);
       console.log(products);
    };

    useEffect(() => {
      FetchProducts();
  }, [items]);

  
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

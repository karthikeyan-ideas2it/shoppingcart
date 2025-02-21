import ShoppingCart from '../ShoppingCart/ShoppingCart';
import ShoppingItemList from '../ShoppingItemList/ShoppingItemList';
import ErrorBoundary from '../ErrorBoundary';
import ErrorHandling from '../ErrorHandling';
import Buggy from '../Buggy';
import React, { useState,useEffect } from 'react';
import {ProductCategory} from '../ProductCategory/ProductCategory';
import { FaLaptop, FaTshirt, FaHome, FaBook, FaPuzzlePiece } from 'react-icons/fa'; // Import icons from react-icons
import { SearchBar } from '../SearchBar/SearchBar';
import { FaShoppingCart } from 'react-icons/fa';

const categories = [
    { id: 1, name: 'electronics', icon: <FaLaptop /> },
    { id: 2, name: 'jewelery',icon: <FaHome /> },
    { id: 3, name: `men's clothing`, icon: <FaTshirt />},
    { id: 4, name: `women's clothing`,icon: <FaHome /> }
  ];

  
const Home = (props) => {
 
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (category) => {
       
        setSelectedCategory(category);
      };

      useEffect(() => {
        if (selectedCategory) {
          // You can replace this with an API call
          setSelectedCategory(selectedCategory);
          //setProducts(productsData[selectedCategory] || []);
        }
      }, [selectedCategory]);

  return (
    <div>
                  <div className="row">
                    <div className="col-1">
                    <FaShoppingCart size={30} /><p>KK</p>
                    </div>
                    <div className="col-7">
                       <SearchBar searchQuery={categories} onSearchChange={handleCategoryChange} ></SearchBar>
                    </div>
                    <div className="col-4"></div>
                  </div>
                  <div className="row">
                  <div className="col-1">
                    <ProductCategory categories={categories} onCategoryChange={handleCategoryChange}/>
                    </div>
                    <div className="col-7">
                    <ErrorBoundary>
                    <ShoppingItemList  selectedCategory={selectedCategory} />
                    </ErrorBoundary>
                    </div>
                    <div className="col-4">
                   {/*  <ErrorBoundary>
                            <Buggy/>
                        </ErrorBoundary> */}
                    <ShoppingCart />
                    </div>
                  </div>
    </div>
  )
};

export default Home;

import React from 'react';
import './ProductCategory.scss';

export const ProductCategory = ({ categories, onCategoryChange }) => {
  return (
    <div className='ProductCategory'>
    <div className="treeview">
      <ul className="list-group">
      {categories.map((category) => (
          <li class="list-group-item" key={category.id}>
            <button onClick={() => onCategoryChange(category)}>
            {category.name}
            </button>
            <br/>
          </li>
        ))}
        <li class="list-group-item" >
          <button onClick={() => onCategoryChange(null)}>All Products</button>
        </li>
      </ul>
    </div>
  </div>
);
};


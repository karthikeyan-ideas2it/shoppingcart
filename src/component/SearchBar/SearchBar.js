import React from 'react';

export const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
};
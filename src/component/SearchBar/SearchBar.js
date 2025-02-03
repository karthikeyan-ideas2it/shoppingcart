import React from 'react';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={searchQuery}
          onChange={onSearchChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">
            <i className="bi bi-search"></i> {/* Optional icon for search */}
          </button>
        </div>
      </div>
    </div>
  );
};
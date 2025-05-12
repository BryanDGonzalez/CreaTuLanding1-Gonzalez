import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting, children }) => {
  return (
    <div className="item-list-container">
      <div className="greeting-container">
        <h2>{greeting}</h2>
      </div>
      <div className="items-container">
        {children}
      </div>
    </div>
  );
};

export default ItemListContainer; 
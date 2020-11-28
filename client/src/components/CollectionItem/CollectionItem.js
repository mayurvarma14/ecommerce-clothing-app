import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import { addItem } from '../../redux/cart/cartActions';
import './CollectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name"> {name} </span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={() => addItem(item)} inverted>
        Add to cart
      </Button>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);

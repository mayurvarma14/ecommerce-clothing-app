import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import { selectCollection } from '../../redux/shop/shopSelectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './CollectionPage.styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default connect((state, ownProps) => ({
  collection: selectCollection(ownProps.params.collectionId)(state),
}))(CollectionPage);

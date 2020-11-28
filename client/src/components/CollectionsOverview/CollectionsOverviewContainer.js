import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shopSelectors';
import WithSpinner from '../WithSpinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

const CollectionsOverviewContainer = compose(
  connect(
    createStructuredSelector({
      isLoading: selectIsCollectionFetching,
    })
  ),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

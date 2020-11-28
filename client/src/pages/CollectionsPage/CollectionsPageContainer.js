import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shopSelectors';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionPage from './CollectionPage';

const CollectionPageContainer = compose(
  connect(
    createStructuredSelector({
      isLoading: (state) => !selectIsCollectionsLoaded(state),
    })
  ),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;

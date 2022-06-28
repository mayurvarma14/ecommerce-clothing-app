import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useParams } from 'react-router-dom';
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

const withParams = (WrappedComponent) => (props) => {
  let params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

export default withParams(CollectionPageContainer);

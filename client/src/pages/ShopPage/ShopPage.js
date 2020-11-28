import React, { Component, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../components/Spinner/Spinner';

import { ShopPageContainer } from './ShopPage.styles';
import { fetchCollectionsStart } from '../../redux/shop/shopActions';

const CollectionsPageContainer = lazy(() =>
  import('../CollectionsPage/CollectionsPageContainer')
);
const CollectionsOverviewContainer = lazy(() =>
  import('../../components/CollectionsOverview/CollectionsOverviewContainer')
);
class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <ShopPageContainer>
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionsPageContainer}
          />
        </Suspense>
      </ShopPageContainer>
    );
  }
}

export default connect(null, { fetchCollectionsStart })(ShopPage);

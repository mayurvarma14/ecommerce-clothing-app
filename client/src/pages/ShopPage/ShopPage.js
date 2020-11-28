import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionsPageContainer from '../CollectionsPage/CollectionsPageContainer';
import { ShopPageContainer } from './ShopPage.styles';
import { fetchCollectionsStart } from '../../redux/shop/shopActions';

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionsPageContainer}
        />
      </ShopPageContainer>
    );
  }
}

export default connect(null, { fetchCollectionsStart })(ShopPage);

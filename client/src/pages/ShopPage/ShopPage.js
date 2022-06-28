import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
const ShopPage = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  });

  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<CollectionsOverviewContainer />} />
          <Route
            path={`:collectionId`}
            element={<CollectionsPageContainer />}
          />
        </Routes>
      </Suspense>
    </ShopPageContainer>
  );
};

export default connect(null, { fetchCollectionsStart })(ShopPage);

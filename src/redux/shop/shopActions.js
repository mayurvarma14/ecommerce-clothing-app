import { UPDATE_COLLECTIONS } from './shopTypes';

export const updateCollections = (collectionsMap) => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

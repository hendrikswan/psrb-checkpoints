/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
} from './constants';

const initialState = fromJS({
  topics: [],
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default navigationContainerReducer;

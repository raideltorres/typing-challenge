/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_TEXT, CHANGE_TIME, CHANGE_WORDS } from './constants';

const initialState = fromJS({
  text: '',
  time: 0,
  words: 0,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return state.set('text', action.payload.text);

    case CHANGE_TIME:
      return state.set('time', action.payload.time);

    case CHANGE_WORDS:
      return state.set('words', action.payload.words);

    default:
      return state;
  }
}

export default homeReducer;

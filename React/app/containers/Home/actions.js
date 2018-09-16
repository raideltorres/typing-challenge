/*
 *
 * Home actions
 *
 */

import { CHANGE_TEXT, CHANGE_TIME, CHANGE_WORDS } from './constants';

export function changeText(text) {
  return {
    type: CHANGE_TEXT,
    payload: {
      text,
    },
  };
}

export function changeTime(time) {
  return {
    type: CHANGE_TIME,
    payload: {
      time,
    },
  };
}

export function changeWords(words) {
  return {
    type: CHANGE_WORDS,
    payload: {
      words,
    },
  };
}

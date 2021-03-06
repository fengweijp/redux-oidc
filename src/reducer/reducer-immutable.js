import { fromJS } from 'immutable';
import {
  USER_EXPIRED,
  REDIRECT_SUCCESS,
  USER_FOUND,
  USER_NOT_FOUND,
  SILENT_RENEW_ERROR,
  SESSION_TERMINATED,
  LOADING_USER,
  USER_SIGNED_OUT
} from '../constants';

const initialState = fromJS({
  user: null,
  isLoadingUser: false
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_EXPIRED:
      return state.set('isLoadingUser', false);
    case SILENT_RENEW_ERROR:
      return state.set('isLoadingUser', false);
    case SESSION_TERMINATED:
    case USER_SIGNED_OUT:
      return fromJS({
        user: null,
        isLoadingUser: false
      });
    case REDIRECT_SUCCESS:
    case USER_FOUND:
      return fromJS({
        user: action.payload,
        isLoadingUser: false
      });
    case LOADING_USER:
      return state.set('isLoadingUser', true);
    default:
      return state;
  }
}

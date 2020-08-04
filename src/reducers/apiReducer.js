import * as apiActions from './../actions/apiActions';

const INITIAL_STATE = {
  user: {},
  repos: {},
}

function apiReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case apiActions.FETCH_USER_DATA:
      return {
        ...state, user: action.payload,
      }

    case apiActions.FETCH_REPO_DATA:
      return {
        ...state, repos: action.payload,
      }

    default:
      return state;
  }
}

export default apiReducer;
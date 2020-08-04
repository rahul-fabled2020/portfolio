export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_REPO_DATA = 'FETCH_REPO_DATA';

export const fetchUserData = user => ({
  type: FETCH_USER_DATA,
  payload: user
});

export const fetchRepoData = repos => ({
  type: FETCH_REPO_DATA,
  payload: repos
});
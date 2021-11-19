import { AUTHORIZATION, ALL_USERS, USER_CLEAR, GET_USER_DATA, USER_POSTS } from '../reducers/actionTypes';
import { authApi } from '../../utils/api';

export const authUser = (data) => (dispatch) => {
  try {
    dispatch({ type: AUTHORIZATION, payload: data });
  } catch (e) {
    dispatch({
      type: AUTHORIZATION,
      payload: null,
    });
  }
};
export const getAllUsers = (obj) => (dispatch) => {
  try {
    dispatch({ type: ALL_USERS, payload: { users: obj } });
  } catch (e) {
    dispatch({ type: ALL_USERS, payload: null });
  }
};

export const getUserById = (firstName, lastName, email, github, twitter, instagram, facebook) => (dispatch) => {
  try {
    dispatch({ type: GET_USER_DATA, payload: { firstName, lastName, email, github, twitter, instagram, facebook } });
  } catch (e) {
    dispatch({
      type: GET_USER_DATA,
      payload: {
        firstName: null,
        lastName: null,
        email: null,
        github: null,
        twitter: null,
        instagram: null,
        facebook: null,
      },
    });
  }
};
export const getUserPosts = (obj) => (dispatch) => {
  try {
    dispatch({ type: USER_POSTS, payload: { posts: obj } });
  } catch (e) {
    dispatch({ type: USER_POSTS, payload: null });
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: USER_CLEAR, payload: null });
};
export const fetchAuth = (username, password) => (dispatch) => {
  authApi
    .authenticate({ username, password })
    .then(({ data }) => {
      dispatch(authUser(data));
      localStorage.setItem('token', data.tokens.accessToken);
    })
    .catch((e) => alert(e));
};

import { ALL_USERS, AUTHORIZATION, GET_USER_DATA, USER_CLEAR, USER_POSTS } from './actionTypes';

const initialState = {
  user: null,
  tokens: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION: {
      return { ...state, ...action.payload };
    }
    case ALL_USERS: {
      return { ...state, ...action.payload };
    }
    case USER_CLEAR: {
      return initialState;
    }
    case USER_POSTS: {
      return { ...state, ...action.payload };
    }
    case GET_USER_DATA: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};
export default userReducer;

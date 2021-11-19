import { GET_MESSAGES } from './actionTypes';

const initialState = {
  id: null,
  text: null,
  updatedAt: null,
  dialog: null,
  messages: [],
};
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};
export default messageReducer;

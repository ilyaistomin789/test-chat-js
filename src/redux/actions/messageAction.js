import { GET_MESSAGES } from '../reducers/actionTypes';
import { messageApi } from '../../utils/api';

export const getMessages = (obj) => (dispatch) => {
  try {
    dispatch({ type: GET_MESSAGES, payload: { messages: obj } });
  } catch (e) {
    dispatch({ type: GET_MESSAGES, payload: null });
  }
};
export const fetchMessages = (dialogId) => (dispatch) => {
  messageApi
    .getAll(dialogId)
    .then(({ data }) => dispatch(getMessages(data)))
    .catch((e) => alert(e));
};

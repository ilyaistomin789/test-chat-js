import { GET_MESSAGES, ADD_MESSAGE } from '../reducers/actionTypes';
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

export const addMessage = message => (dispatch, getState) => {
  const { dialog } = getState();
  const { currentDialogId } = dialog;
  if (+currentDialogId === message.dialog.id) {
    dispatch({
      type: ADD_MESSAGE,
      payload: message
    });
  }
}

export const fetchSendMessage = ({dialogId, text}) => (dispatch) => messageApi.create({dialogId, text})

import { ADD_DIALOG, GET_DIALOGS, SET_CURRENT_DIALOG_ID } from '../reducers/actionTypes';
import { dialogApi } from '../../utils/api';

export const getDialogs = (obj) => (dispatch) => {
  try {
    dispatch({ type: GET_DIALOGS, payload: { dialogs: obj } });
  } catch (e) {
    dispatch({ type: GET_DIALOGS, payload: null });
  }
};
export const fetchDialogs = () => (dispatch) => {
  dialogApi
    .getAll()
    .then(({ data }) => dispatch(getDialogs(data)))
    .catch((e) => alert(e));
};
export const setCurrentDialogId = (dialogId) => (dispatch) => {
  try {
    dispatch({ type: SET_CURRENT_DIALOG_ID, payload: { currentDialogId: dialogId } });
  } catch (e) {
    dispatch({
      type: SET_CURRENT_DIALOG_ID,
      payload: { currentDialogId: window.location.pathname.split('dialog/')[1] },
    });
  }
};

export const addDialog = (dialog) => (dispatch) => {
  dispatch({ type: ADD_DIALOG, payload: dialog });
};
export const fetchCreateDialog =
  ({ name, partnerId }) =>
  (dispatch) => {
    return dialogApi.create({ name, partnerId });
  };

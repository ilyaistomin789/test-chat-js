import { ADD_DIALOG, GET_DIALOGS, SET_CURRENT_DIALOG_ID } from './actionTypes';

const initialState = {
  id: null,
  name: null,
  createdAt: null,
  updatedAt: null,
  currentDialogId: '',
  dialogs: [],
};
const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DIALOGS: {
      return { ...state, ...action.payload };
    }
    case SET_CURRENT_DIALOG_ID: {
      return { ...state, ...action.payload };
    }
    case ADD_DIALOG: {
      return {
        ...state,
        dialogs: [...state.dialogs, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
export default dialogReducer;

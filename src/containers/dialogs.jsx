import Dialogs from '../components/dialogs';
import { useState } from 'react';
import { connect } from 'react-redux';
import { fetchDialogs } from '../redux/actions/dialogAction';

const DialogsContainer = ({ fetchDialogs, dialogs, currentDialogId }) => {
  useState(() => {
    fetchDialogs();
  });

  return (
    <div>
      <Dialogs dialogs={dialogs} currentDialogId={currentDialogId} />
    </div>
  );
};

const mapDispatchToProps = {
  fetchDialogs: fetchDialogs,
};

const mapStateToProps = function (state) {
  return {
    dialogs: state.dialog.dialogs,
    currentDialogId: state.dialog.currentDialogId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);

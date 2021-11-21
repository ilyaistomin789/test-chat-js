import Dialogs from '../components/dialogs';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addDialog, fetchCreateDialog, fetchDialogs } from '../redux/actions/dialogAction';
import socket from '../core/socket';

const DialogsContainer = ({ fetchDialogs, dialogs, currentDialogId, fetchCreateDialog, addDialog }) => {
  const refreshDialog = (dialog) => addDialog(dialog);

  useState(() => {
    fetchDialogs();
    socket.on('ADD_DIALOG', refreshDialog);
    return () => socket.removeListener('ADD_DIALOG', refreshDialog);
  });
  const [partnerId, setPartnerId] = useState(0);
  const [dialogName, setDialogName] = useState('');
  const handleSetPartnerId = (e) => setPartnerId(+e.target.value);
  const handleSetDialogName = (e) => setDialogName(e.target.value);
  const handleCreateDialog = () => {
    fetchCreateDialog({ name: dialogName, partnerId: partnerId });
  };

  return (
    <div>
      <Dialogs
        dialogs={dialogs}
        currentDialogId={currentDialogId}
        handleSetDialogName={handleSetDialogName}
        handleSetPartnerId={handleSetPartnerId}
        handleCreateDialog={handleCreateDialog}
      />
    </div>
  );
};

const mapDispatchToProps = {
  fetchDialogs: fetchDialogs,
  fetchCreateDialog: fetchCreateDialog,
  addDialog: addDialog,
};

const mapStateToProps = function (state) {
  return {
    dialogs: state.dialog.dialogs,
    currentDialogId: state.dialog.currentDialogId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);

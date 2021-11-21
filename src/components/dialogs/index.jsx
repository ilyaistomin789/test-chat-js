import Dialog from '../dialog/';
import './style.scss';
const Dialogs = ({ dialogs, currentDialogId, handleSetDialogName, handleSetPartnerId, handleCreateDialog }) => {
  return (
<>
    <input type="text" onChange={handleSetDialogName} placeholder="Dialog name"/>
    <input type="text" onChange={handleSetPartnerId} placeholder="partnerId"/>
    <button onClick={handleCreateDialog}>CREATE</button>
    <div className="dialog__container">
        {dialogs.length
            ? dialogs.map((dialog) => <Dialog key={dialog.id} name={dialog.name} currentDialogId={currentDialogId}  {...dialog}/>)
            : null}
    </div></>
  );
};
export default Dialogs;

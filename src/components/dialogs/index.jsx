import Dialog from '../dialog/';
import './style.scss';
const Dialogs = ({ dialogs, currentDialogId }) => {
  return (
    <div className="dialog__container">
      {dialogs.length
        ? dialogs.map((dialog) => <Dialog key={dialog.id} name={dialog.name} currentDialogId={currentDialogId}  {...dialogs}/>)
        : null}
    </div>
  );
};
export default Dialogs;

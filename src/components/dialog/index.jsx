import { Link } from 'react-router-dom';

const Dialog = ({id, currentDialogId, name }) => { //FIX
  return (
    <Link to={`/chat/dialog/${id}`}>
      <div>{name}</div>
    </Link>
  );
};
export default Dialog;

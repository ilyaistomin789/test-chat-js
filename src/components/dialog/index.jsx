import { Link } from 'react-router-dom';

const Dialog = ({ currentDialogId, name }) => {
  return (
    <Link to={`/dialog/${currentDialogId}`}>
      <div>{name}</div>
    </Link>
  );
};
export default Dialog;

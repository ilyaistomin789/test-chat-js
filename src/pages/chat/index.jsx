import { Dialogs, Messages } from '../../containers/';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCurrentDialogId } from '../../redux/actions/dialogAction';
import { useLocation } from 'react-router-dom';

const Chat = (props) => {
  const location = useLocation();
  useEffect(() => {
      console.log(location.pathname.includes('/chat/dialog'))
      if(location.pathname.includes('/chat/dialog')){
          const dialogId = location.pathname.split('/')[3];
          props.setCurrentDialogId(dialogId);
      }
  }, [location.pathname]);
  return (
    <div>
      <Dialogs />
      <Messages />
    </div>
  );
};

const mapDispatchToProps = {
  setCurrentDialogId: setCurrentDialogId,
};

export default connect(null, mapDispatchToProps)(Chat);

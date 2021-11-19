import Messages from '../components/messages';
import { useEffect } from 'react';
import { fetchMessages } from '../redux/actions/messageAction';
import { connect } from 'react-redux';

const MessagesContainer = ({ currentDialogId, fetchMessages, messages }) => {
  useEffect(() => {
    console.log('222')
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId]);

  if (!currentDialogId) {
    return <div>Откройте диалог</div>;
  }

  return (
    <div>
      <Messages messages={messages} />
    </div>
  );
};

const mapDispatchToProps = {
  fetchMessages: fetchMessages,
};

const mapStateToProps = function (state) {
  return {
    messages: state.message.messages,
    currentDialogId: state.dialog.currentDialogId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);

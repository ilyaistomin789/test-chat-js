import Messages from '../components/messages';
import {useEffect, useState} from 'react';
import {addMessage, fetchMessages, fetchSendMessage} from '../redux/actions/messageAction';
import { connect } from 'react-redux';
import socket from "../core/socket";

const MessagesContainer = ({ currentDialogId, fetchMessages, messages, fetchSendMessage, addMessage }) => {
  const [message, setMessage] = useState('');
  const handleSendMessage = e => {
      sendMessage();
  }
  const sendMessage = () => {
    fetchSendMessage({text: message, dialogId: +currentDialogId});
    setMessage('');
  }
  const refreshMessage = message => addMessage(message);
  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
    socket.on('ADD_MESSAGE', refreshMessage);
    return () => socket.removeListener('ADD_MESSAGE', refreshMessage)
  }, [currentDialogId]);
  if (!currentDialogId) {
    return <div>Откройте диалог</div>;
  }

  return (
    <div>
      <Messages messages={messages} setMessage={setMessage} handleSendMessage={handleSendMessage} />
    </div>
  );
};

const mapDispatchToProps = {
  fetchMessages: fetchMessages,
  fetchSendMessage: fetchSendMessage,
  addMessage: addMessage
};

const mapStateToProps = function (state) {
  return {
    messages: state.message.messages,
    currentDialogId: state.dialog.currentDialogId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);

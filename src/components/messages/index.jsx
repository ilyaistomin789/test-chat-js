import Message from '../message';

const Messages = ({ messages }) => (
  <div>{messages.length ? messages.map((message) => <Message key={message.id} text={message.text} />) : null}</div>
);
export default Messages;

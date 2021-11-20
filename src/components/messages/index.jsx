import Message from '../message';

const Messages = ({ messages, setMessage, handleSendMessage }) => (
    <>
        <div>{messages.length ? messages.map((message) => <Message key={message.id} text={message.text} />
        ) : null}</div>
        <textarea onChange={e => setMessage(e.target.value)} cols="30" rows="10"></textarea>
        <button onClick={handleSendMessage}>SEND</button>
    </>
);
export default Messages;

import axios from '../../core/axios';

class MessageApi {
  getAll = (dialogId) => axios.get(`/message/${dialogId}`);
  create = ({ dialogId, text }) => axios.post('/dialog', { dialogId, text });
}
export default new MessageApi();

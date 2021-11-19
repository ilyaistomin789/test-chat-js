import axios from '../../core/axios';


class DialogApi {
  getAll = () => axios.get('/dialog');
  create = ({ name, partnerId }) => axios.post('/dialog', { name, partnerId });
}

export default new DialogApi();

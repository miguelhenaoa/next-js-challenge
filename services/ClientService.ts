import api from '../config/api';
import { ClientRequestPayload } from '../utils/interfaces/client';

export const postClient = (payload: ClientRequestPayload): Promise<any> => {
  const formData = build(payload);
  return api.post('/open/cliente/', formData);
};

const build = (obj: any) => {
  const formData = new FormData();
  Object.keys(obj).forEach((key) => formData.append(key, obj[key]));
  return formData;
};

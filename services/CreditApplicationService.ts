import api from '../config/api';
import { CreditApplicationPayload } from '../utils/interfaces/credit-application';

const URL = '/open/form-tiempos/';
const URL_DEV = '/applications/user'; 

export const application = (
  payload: CreditApplicationPayload
): Promise<any> => {
  const formData = build(payload);
  return api.post(URL, formData);
};

export const getApplicationsByClient = (dni: string): Promise<any> => {
  return api.get(`${URL_DEV}/${dni}`);
};

const build = (obj: any) => {
  const formData = new FormData();
  Object.keys(obj).forEach(
    (key) => key !== 'id' && formData.append(key, obj[key])
  );
  return formData;
};

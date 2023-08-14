import api from '../config/api';
import { CreditApplicationPayload } from '../utils/interfaces/credit-application';

export const application = (
  payload: CreditApplicationPayload
): Promise<any> => {
  const formData = build(payload);
  return api.post('/open/form-tiempos/', formData);
};

export const getApplicationsByClient = (dni: string): Promise<any> => {
  return api.get(`/open/form-cedula/${dni}/`);
};

const build = (obj: any) => {
  const formData = new FormData();
  Object.keys(obj).forEach(
    (key) => key !== 'id' && formData.append(key, obj[key])
  );
  return formData;
};

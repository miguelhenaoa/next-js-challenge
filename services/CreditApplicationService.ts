import api from '../config/api';
import { CreditApplicationRequestPayload } from '../utils/interfaces/credit-application';

const URL = '/open/form-tiempos/';

export const application = (
  payload: CreditApplicationRequestPayload
): Promise<any> => {
  const formData = build(payload);
  return api.post(URL, formData);
};

const build = (obj: any) => {
  const formData = new FormData();
  Object.keys(obj).forEach(
    (key) => key !== 'id' && formData.append(key, obj[key])
  );
  return formData;
};

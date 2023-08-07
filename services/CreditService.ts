import api from '../config/api';

const URL_DEV = '/credits/user'; 

export const getCreditsByClient = (dni: string): Promise<any> => {
  return api.get(`${URL_DEV}/${dni}`);
};

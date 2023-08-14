import api from '../config/api';

export const getCreditsByClient = (dni: string): Promise<any> => {
  return api.get(`/open/creditos-cedula/${dni}/`);
};

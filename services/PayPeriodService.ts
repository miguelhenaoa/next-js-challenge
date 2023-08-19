import api from '../config/api';

export const getPayPeriodsByCreditId = (creditId: number): Promise<any> => {
  return api.get(`/open/periodos-pago-credito/${creditId}/`);
};

export const getPayPeriodsByDni = (dni: string): Promise<any> => {
  return api.get(`/open/periodos-cedula/${dni}/`);
}

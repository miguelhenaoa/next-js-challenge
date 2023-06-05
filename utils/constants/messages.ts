import { STATUS_CODE } from './status-codes';

export const messages = {
  [STATUS_CODE.CREATED]: '¡Guardado con éxito!',
  [STATUS_CODE.BAD_REQUEST]: 'Se ha producido un error al guardar los datos',
  [STATUS_CODE.INTERNAL_SERVER_ERROR]:
    'Estamos presentando intermitencias en el servicio, por favor intente más tarde'
};

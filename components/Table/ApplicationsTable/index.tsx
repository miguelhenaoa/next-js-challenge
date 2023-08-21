import { durationText } from '../../../utils/constants/credit-duration';
import { deadlinesText } from '../../../utils/constants/deadlines';
import { status } from '../../../utils/constants/status';

interface Props {
  data: any[];
}

function ApplicationsTable({ data }: Props) {
  const application = data[0];

  return (
    <div className="bg-white shadow-md">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-8 sm:gap-y-16 px-2 py-12 sm:px-3 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Solicitud</h2>
          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-y-8 sm:mt-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-2">
              <dt className="font-medium text-gray-900">Fecha de solicitud</dt>
              <dd className="mt-2 text-sm text-gray-500">{formatDate(application['created_at'])}</dd>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <dt className="font-medium text-gray-900">Número de documento</dt>
              <dd className="mt-2 text-sm text-gray-500">{application['cedula_cliente']}</dd>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <dt className="font-medium text-gray-900">Duración del crédito</dt>
              <dd className="mt-2 text-sm text-gray-500">{durationText[application['duracion_credito']]}</dd>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <dt className="font-medium text-gray-900">¿Cada cuánto se pagará el crédito?</dt>
              <dd className="mt-2 text-sm text-gray-500">{deadlinesText[application['cuotas_credito']]}</dd>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <dt className="font-medium text-gray-900">Estado de la solicitud</dt>
              <dd className="mt-2 text-sm text-gray-500">{status[application['preapobado_form_tiempos']]}</dd>
            </div>
          </dl>
        </div>
        <div className="bg-yellow-100 shadow-md py-7 grid grid-cols-1 gap-4 sm:py-14 md:py-28 sm:gap-6 lg:gap-8">
          <h3 className="text-xl tracking-tight text-gray-500 sm:text-xl">Monto solicitado</h3>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">{application['valor_credito_total']} UYU</h3>
        </div>
      </div>
    </div>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}

export default ApplicationsTable;
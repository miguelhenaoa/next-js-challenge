import { status } from '../../../utils/constants/status';

interface Props {
  data: any[];
}

function CreditsTable({ data }: Props) {
  const credit = data[0];

  return (
    <div className="bg-white shadow-md">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-2 py-12 sm:px-3 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="bg-blue-100 shadow-md py-28 grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
          <h3 className="text-xl tracking-tight text-gray-500 sm:text-xl">Balance</h3>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">{credit['pagos_total'] ?? 0} UYU / {credit['valor_credito_total']} UYU</h3>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Crédito</h2>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-2">
              <dt className="font-medium text-gray-900">Número de crédito</dt>
              <dd className="mt-2 text-sm text-gray-500">{credit['id']}</dd>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <dt className="font-medium text-gray-900">Fecha de inicio</dt>
              <dd className="mt-2 text-sm text-gray-500">{formatDate(credit['fecha_inicio'])}</dd>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <dt className="font-medium text-gray-900">Fecha de vencimiento</dt>
              <dd className="mt-2 text-sm text-gray-500">{formatDate(credit['fecha_vencimiento_general'])}</dd>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <dt className="font-medium text-gray-900">Descripción</dt>
              <dd className="mt-2 text-sm text-gray-500">{credit['descripcion_adicional']}</dd>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <dt className="font-medium text-gray-900">Estado del crédito</dt>
              <dd className="mt-2 text-sm text-gray-500">{status[credit['preapobado_form_tiempos']]}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}


function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}

export default CreditsTable;
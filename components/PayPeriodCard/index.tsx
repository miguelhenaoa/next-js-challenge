
interface Props {
  period: any;
}

function PayPeriodCard({ period }: Props) {
  const { fecha_inicio, fecha_fin, pago_efectuado, observaciones, valor_cobro, numero_periodo } = period;
  const statusBg: any = {
    '1': 'bg-green-50 shadow-green-300',
    '2': 'bg-yellow-50 shadow-yellow-300',
    '3': 'bg-red-50 shadow-red-300',
    '4': 'bg-gray-50 shadow-gray-300'
  };
  const statusText: any = {
    '1': 'Pagado',
    '2': 'Pagado parcialmente',
    '3': 'Vencido',
    '4': 'Creado'
  };

  return (
    <section className={`bg-white w-72 sm:w-96 shadow-md rounded-lg p-10  ${statusBg[pago_efectuado]}`}>
      <p className='text-3xl'>{valor_cobro} UYU</p>
      <small className='text-gray-500'>#{numero_periodo}</small>
      <div className='mt-5 grid grid-cols-2 text-left gap-y-1'>
        <article className='col-span-2 sm:col-span-1 flex flex-col'>
          <span>{fecha_inicio}</span>
          <span className='text-xs text-gray-500'>Fecha de inicio</span>
        </article>
        <article className='col-span-2 sm:col-span-1 flex flex-col'>
          <span>{fecha_fin}</span>
          <span className='text-xs text-gray-500'>Fecha de fin</span>
        </article>
        <article className='col-span-2 flex flex-col'>
          <span>{statusText[pago_efectuado]}</span>
          <span className='text-xs text-gray-500'>Estado</span>
        </article>
        <article className='col-span-2'>
          <span className='text-xs text-gray-500'>Observaciones</span>
          <p>{observaciones}</p>
        </article>
      </div>
    </section>
  );
}

export default PayPeriodCard;
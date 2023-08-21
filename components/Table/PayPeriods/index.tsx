import PayPeriodCard from '../../PayPeriodCard';

interface Props {
  data: any[];
}

function PayPeriods({ data }: Props) {
  return (
    <section className='bg-white shadow-md'>
      <div className="mx-auto max-w-2xl items-center gap-x-8 gap-y-16 px-2 py-12 sm:px-3 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Periodos de pago</h2>
        <div className='flex gap-5 items-center justify-center mb-10'>
          <div>
            <span className='inline-block w-3 h-3 mr-1 rounded-full bg-green-500'></span>
            <span>Pagado</span>
          </div>
          <div>
            <span className='inline-block w-3 h-3 mr-1 rounded-full bg-yellow-500'></span>
            <span>Pago parcialmente</span>
          </div>
          <div>
            <span className='inline-block w-3 h-3 mr-1 rounded-full bg-red-500'></span>
            <span>Vencido</span>
          </div>
          <div>
            <span className='inline-block w-3 h-3 mr-1 rounded-full bg-gray-500'></span>
            <span>Creado</span>
          </div>
        </div>
        <div className='flex items-center justify-center gap-5'>
          {data.map((period, index) => (
            <PayPeriodCard key={index} period={period} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default PayPeriods;
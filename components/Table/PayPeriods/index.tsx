interface Props {
  data: any[];
}

function PayPeriods({ data }: Props) {
  return (
    <section className='ng-white shadow-md'>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-2 py-12 sm:px-3 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Periodos de pago</h2>
      </div>
    </section>
  );
}
export default PayPeriods;
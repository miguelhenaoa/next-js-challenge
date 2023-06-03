export default function FaqPage() {
  return (
    <section className='px-10 py-20 grid grid-cols-1 gap-x-10 lg:grid-cols-5 lg:px-40'>
      <div className='col-span-2 flex flex-col gap-y-5 pb-10' >
        <h2 className='text-2xl font-medium '>Preguntas frecuentes</h2>
        <p className='font-light'>¿No encuentra la respuesta que busca? Póngase en contacto con nuestro equipo de atención al cliente.</p>
      </div>
      <div className='col-span-3'>
        <dl className='grid gap-y-8'>
          <div>
            <dt className='text-lg font-medium'>¿Qué es un préstamo?</dt>
            <dd className='font-light'>Un préstamo es una cantidad de dinero que se le presta a una persona o entidad, con la obligación de devolver el dinero prestado y de pagar los intereses generados por el préstamo.</dd>
          </div>
          <div>
            <dt className='text-lg font-medium'>¿Qué es un préstamo personal?</dt>
            <dd className='font-light'>Un préstamo personal es un producto financiero que permite a una persona física obtener una cantidad de dinero de una entidad financiera a cambio del compromiso de devolverlo en el plazo acordado y de pagar los intereses correspondientes.</dd>
          </div>
          <div>
            <dt className='text-lg font-medium'>¿Qué es un préstamo empresarial?</dt>
            <dd className='font-light'>Un préstamo empresarial es un producto financiero que permite a una persona moral obtener una cantidad de dinero de una entidad financiera a cambio del compromiso de devolverlo en el plazo acordado y de pagar los intereses correspondientes.</dd>
          </div>
          <div>
            <dt className='text-lg font-medium'>¿Qué es una tasa de interés?</dt>
            <dd className='font-light'>La tasa de interés es el porcentaje que se aplica a una cantidad de dinero llamada capital, para obtener un beneficio o ganancia llamado intereses (intereses = capital x tasa de interés).</dd>
          </div>
          <div>
            <dt className='text-lg font-medium'>¿Qué es un CAT?</dt>
            <dd className='font-light'>El CAT es el Costo Anual Total, es el porcentaje que representa el costo total de un crédito, incluyendo la tasa de interés anual, las comisiones y los gastos adicionales.</dd>
          </div>
          <div>
            <dt className='text-lg font-medium'>¿Qué es un crédito?</dt>
            <dd className='font-light'>Un crédito es una cantidad de dinero que se le presta a una persona o entidad, con la obligación de devolver el dinero prestado y de pagar los intereses generados por el crédito.</dd>
          </div>
          <div>
            <dt className='text-lg font-medium'>¿Qué es un crédito personal?</dt>
            <dd className='font-light'>Un crédito personal es un producto financiero que permite a una persona física obtener una cantidad de dinero de una entidad financiera a cambio del compromiso de devolverlo en el plazo acordado y de pagar los intereses correspondientes.</dd>
          </div>
          <div>
            <dt className='text-lg font-medium'>¿Qué es un crédito empresarial?</dt>
            <dd className='font-light'>Un crédito empresarial es un producto financiero que permite a una persona moral obtener una cantidad de dinero de una entidad financiera a cambio del compromiso de devolverlo en el plazo acordado y de pagar los intereses correspondientes.</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
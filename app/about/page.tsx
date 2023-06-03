import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className='grid p-10 text-center gap-y-10'>
      <section className='grid grid-cols-1 md:grid-cols-2 '>
        <section className='col-span-1 gap-y-5 flex flex-col justify-center'>
          <h5>¿Quiénes somos?</h5>
          <article>
            <p>
              Somos una empresa dedicada a beneficiar a los potenciales clientes que
              necesitan soluciones crediticias, confiando y dándoles oportunidades
              para su mejor desarrollo en sus proyectos personales o empresariales.
            </p>
          </article>
        </section>
        <Image
          className='col-span-1 hidden sm:block'
          src="/images/about-us.svg"
          alt="About Us"
          width={600}
          height={600}
        />
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 '>
        <Image
          className='col-span-1 hidden sm:block'
          src="/images/our-business.svg"
          alt="About Us"
          width={600}
          height={600}
        />
        <section className='col-span-1 gap-y-5 flex flex-col justify-center'>
          <h5>¿A qué nos dedicamos?</h5>
          <article>
            <p>
              Otorgamos préstamos personales para solucionar las necesidades del cliente
              y prestamos empresariales ya sea a pequeñas y medianas empresas para su
              mejor desarrollo y hacer crecer su negocio. Somos una financiera digital,
              sin sucursales, por lo que nos valemos de canales digitales como Email,
              SMS y Marketing Digital para comunicarnos contigo y darnos a conocer.
            </p>
          </article>
        </section>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 '>
        <section className='col-span-1 gap-y-5 flex flex-col justify-center'>
          <h5>Objetivo</h5>
          <article>
            <p>
              Brindar la menor tasa del mercado, dar un servicio 100% digital, el monto
              otorgado se deposita directo en tu cuenta, rápidamente. Que el cliente
              crea en nosotros y nosotros en ellos.
            </p>
          </article>
        </section>
        <Image
          className='col-span-1 hidden sm:block'
          src="/images/vision.svg"
          alt="About Us"
          width={600}
          height={600}
        />
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 '>
        <Image
          className='col-span-1 hidden sm:block'
          src="/images/mision.svg"
          alt="About Us"
          width={600}
          height={600}
        />
        <section className='col-span-1 gap-y-5 flex flex-col justify-center'>
          <h5>Misión</h5>
          <article>
            <p>
              Generar oportunidad de inclusión financiera a toda la población de manera
              rápida y responsable. Ofrecer soluciones financieras respaldadas con
              tecnología de ultima generación.
            </p>
          </article>
        </section>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 '>
        <section className='col-span-1 gap-y-5 flex flex-col justify-center'>
          <h5>Visión</h5>
          <article>
            <p>
              Queremos que tengas una increíble experiencia 100% digital, fácil de usar
              y simple de entender. La visión como empresa suministradora de créditos,
              es facilitar la integración en el mercado de nuestros clientes.
            </p>
          </article>
        </section>
        <Image
          className='col-span-1 hidden sm:block'
          src="/images/target.svg"
          alt="About Us"
          width={600}
          height={600}
        />
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2'>
        <Image
          className='col-span-1 hidden sm:block'
          src="/images/ethics.svg"
          alt="About Us"
          width={600}
          height={600}
        />
        <section className='col-span-1 gap-y-5 flex flex-col justify-center'>
          <h5>Valores institucionales</h5>
          <article>
            <p>
              Somos una financiera que ofrece productos financieros innovadores y
              personalizados que atienden la realidad de nuestros clientes para
              ayudarlos a resolver necesidades, concretar sueños y oportunidades. Con la
              misión de generar acceso a herramientas financieras a las población no
              bancarizada. En este sentido, orientados a brindarle la mejor experiencia
              a nuestros clientes la integridad y compromiso es un distintivo de nuestra
              forma de hacer.
            </p>
          </article>
        </section>
      </section>
    </section>
  );
}
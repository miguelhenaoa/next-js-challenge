"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';
import Card from "../components/card";

const text = "¡Obtén el impulso financiero que necesitas hoy mismo con nuestros préstamos rápidos y confiables!";
const description = "Tu solución financiera a un solo clic: descubre nuestros préstamos flexibles y asequibles para alcanzar tus metas económicas.";

export default function Home() {
  const router = useRouter();

  return (
    <section>
      <section className="px-5 bg-[#fef6e1] grid grid-cols-1 py-10 lg:grid-cols-2 sm:px-10 lg:px-64">
        <div className="col-span-1 grid gap-y-5">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl">{text}  </h2>
            <h2 className="text-blue-600 text-3xl md:text-4xl lg:text-5xl">¡Somos OpenWord!</h2>
          </div>
          <p className="text-base text-[#4b5563]">{description}</p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <input
              className="col-span-1 sm:col-span-5 lg:col-span-8 h-12 placeholder-gray-500 border rounded-lg focus:shadow-outline"
              type="text"
              placeholder="Ingresa tu correo electrónico"
            />
            <button className="col-span-1 sm:col-span-2 lg:col-span-3 h-12 text-white bg-blue-600 rounded-lg hover:bg-blue-700" onClick={() => router.push("/register")}>
              Solicitar
            </button>
          </div>
        </div>
        <Image className="col-span-1"
          src="/images/coins.svg"
          alt="landing"
          width={600}
          height={600}
        />
      </section>
      <section className="bg-[#fafafc] py-20 px-10 grid justify-center gap-y-10 lg:px-5">
        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl">Solicita fácilmente un crédito con nosotros</h3>
        <div className="w-100 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Card
            className="lg:col-start-2"
            title="Inscripción"
            description="Llena nuestro formulario"
            color="#e8e7fe"
          />
          <Card
            className="md:col-span-1"
            title="Revisión"
            description="Tu solicitud será revisada por uno de nuestros asesores"
            color="#e8e7fe"
          />
          <Card
            className="md:col-span-1"
            title="Respuesta"
            description="Recibirás una respuesta en menos de 24 horas"
            color="#e8e7fe"
          />
        </div>
      </section>
      <section className="bg-[#fafafc] py-20 grid justify-center gap-y-10">
        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl">Usa cualquiera de nuestros aliados</h3>
        <div className="w-100 grid grid-cols-1 gap-6">
          <Card
            className=""
            title="[Nombre de pasarela de pago]"
            description="[Información de pasarela de pago]"
            color="#e8e7fe"
          />
        </div>
      </section>
      <section className='grid p-10 text-center gap-y-10'>
        <h2 className='text-3xl font-medium'>Conócenos, <span className='text-blue-600'>¡Somos OpenWord!</span></h2>
        <section className='grid grid-cols-1 p-5 md:grid-cols-2 '>
          <section className='col-span-1 gap-y-5 flex flex-col justify-center'>
            <h5>¿Quiénes somos?</h5>
            <article className="font-light">
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
        <section className='grid grid-cols-1 bg-[#fef6e1] p-5 md:grid-cols-2'>
          <Image
            className='col-span-1 hidden sm:block'
            src="/images/our-business.svg"
            alt="About Us"
            width={600}
            height={600}
          />
          <section className='col-span-1 gap-y-5 flex flex-col justify-center'>
            <h5>¿A qué nos dedicamos?</h5>
            <article className="font-light">
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
        <h6 className='font-normal'>¿Quieres conocer más sobre nosotros?, visita este <Link className='text-blue-600' href={'/about'}>enlace</Link></h6>
      </section>
    </section>
  );
}

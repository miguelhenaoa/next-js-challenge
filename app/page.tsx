'use client'
import { useRouter } from 'next/navigation';
import styles from './Home.module.css';
import Image from "next/image";
import Card from '../components/card';

const text = "¡Obtén el impulso financiero que necesitas hoy mismo con nuestros préstamos rápidos y confiables!";
const description = "Tu solución financiera a un solo clic: descubre nuestros préstamos flexibles y asequibles para alcanzar tus metas económicas.";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <section className={styles.landing}>
        <div className={`${styles.item} ${styles.flexColumn}`}>
          <h2>{text} </h2>
          <p className={styles.description}>{description}</p>
          <div className="flex flex-row gap-5 w-100">
            <input
              className="w-80 h-12 px-3 placeholder-gray-500 border rounded-lg focus:shadow-outline"
              type="text"
              placeholder="Ingresa tu correo electrónico"
            />
            <button className="w-30 h-12 px-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700" onClick={() => router.push('/register')}>
              Solicitar
            </button>
          </div>
        </div>
        <Image className={styles.item}
          src="/images/coins.svg"
          alt="landing"
          width={300}
          height={300}
        />
      </section>
      <section className={`${styles.steps} grid justify-center gap-y-10`}>
        <h3 className='text-center text-2xl sm:text-3xl md:text-4xl'>Solicita fácilmente un crédito con nosotros</h3>
        <div className='w-100 grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-5'>
          <Card 
            className='lg:col-start-2' 
            title="Inscripción" 
            description='Llena nuestro formulario'
            color='#e8e7fe'
          />
          <Card 
            className='md:col-span-1' 
            title="Revisión" 
            description='Tu solicitud será revisada por uno de nuestros asesores'
            color='#e8e7fe'
          />
          <Card 
            className='md:col-span-1' 
            title="Respuesta" 
            description='Recibirás una respuesta en menos de 24 horas'
            color='#e8e7fe'
          />
        </div>
      </section>
    </>
  );
}

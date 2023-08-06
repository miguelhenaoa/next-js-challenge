
'use client';
import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import emptyAnimation from '../../public/animations/empty.json';
import searchAnimation from '../../public/animations/search.json';
import { getApplicationsByClient } from '../../services/CreditApplicationService';

function AccountStatusPage() {
  const router = useRouter();
  const [dni, setDni] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [hasApplications, setHasApplications] = useState(false);
  const [applications, setApplications] = useState([]);

  const handleDniChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDni(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowForm(false);
    setLoading(true);
    getInfo(dni);
  };

  const getInfo = (dni: string) => {
    getApplicationsByClient(dni).then((res) => {
      setApplications(res);
      setHasApplications(res.length > 0);
      setLoading(false);
    }, (err) => {
      if (err.status === 404) {
        setHasApplications(false);
      }
      setLoading(false);
    });
  };

  return (
    <section className='grid p-10 text-center gap-y-10'>
      <h2 className='text-3xl'>Estado de cuenta</h2>
      {loading &&
        <div className='w-1/2 mx-auto my-0'>
          <Lottie animationData={searchAnimation} />
          <span>Consultando...</span>
        </div>
      }
      {showForm && <section>
        <p className='text-lg'>
          Ingresa tu numero de documento para consultar tu estado de cuenta
        </p>
        <form
          className='flex flex-col gap-5 items-center'
          onSubmit={handleSubmit}
        >
          <input
            className='h-12 placeholder-gray-500 border rounded-lg focus:shadow-outline w-2/3'
            type='text'
            placeholder='Ingresa tu numero de documento'
            value={dni}
            onChange={handleDniChange}
          />
          <button
            className='h-12 text-white bg-blue-600 rounded-lg hover:bg-blue-700 w-40'
            type='submit'
          >
            Consultar
          </button>
        </form>
      </section>}
      {!hasApplications && !showForm && !loading &&
        <>
          <h3 className='text-2xl'>No tenemos nada para mostrarte</h3>
          <div className='grid grid-cols-1 gap-5 w-2/6 mx-auto my-0'>
            <Lottie animationData={emptyAnimation} />
            <button
              className='w-100 h-12 text-white bg-blue-600 rounded-lg hover:bg-blue-700'
              onClick={() => router.push('/')}
            >
              Volver a la pagina de inicio
            </button>
            <button
              className='h-12 text-white bg-[#E7AE0A] rounded-lg'
              onClick={() => setShowForm(true)}
            >
              Consultar otro documento
            </button>
          </div>
        </>
      }
    </section>
  );
}

export default AccountStatusPage;

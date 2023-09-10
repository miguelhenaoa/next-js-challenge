
'use client';
import { NextUIProvider } from '@nextui-org/react';
import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import ApplicationsTable from '../../components/Table/ApplicationsTable';
import CreditsTable from '../../components/Table/CreditsTable';
import emptyAnimation from '../../public/animations/empty.json';
import searchAnimation from '../../public/animations/search.json';
import creditAnimation from '../../public/animations/credit.json';
import { getApplicationsByClient } from '../../services/CreditApplicationService';
import { getCreditsByClient } from '../../services/CreditService';
import PayPeriods from '../../components/Table/PayPeriods';
import { getPayPeriodsByCreditId } from '../../services/PayPeriodService';
import ReCAPTCHA from 'react-google-recaptcha';

function AccountStatusPage() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const router = useRouter();
  const [dni, setDni] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [applications, setApplications] = useState([]);
  const [hasApplications, setHasApplications] = useState(false);
  const [credits, setCredits] = useState([]);
  const [hasCredits, setHasCredits] = useState(false);
  const [payPeriods, setPayPeriods] = useState([]);
  const [hasPayPeriods, setHasPayPeriods] = useState(false);

  const handleDniChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDni(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!recaptchaRef.current) {
      return;
    }
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      return;
    }
    e.preventDefault();
    setShowForm(false);
    setLoading(true);
    getInfo(dni);
  };

  const getInfo = (dni: string) => {
    getApplicationsByClient(dni).then((res) => {
      setApplications(res);
      setHasApplications(res.length > 0);
      const application = res[0];
      const isApproved = application.preapobado_form_tiempos === '1';
      isApproved ? getCreditInfo(dni) : setLoading(false);
    }, (err) => {
      if (err.status === 404) {
        setHasApplications(false);
      }
      setLoading(false);
    });
  };

  const getCreditInfo = (dni: string) => {
    getCreditsByClient(dni).then((res) => {
      setCredits(res);
      setHasCredits(res.length > 0);
      getPayPeriodsInfo(res[0].id);
    }, (err) => {
      if (err.status === 404) {
        setHasCredits(false);
      }
      setLoading(false);
    });
  }

  const getPayPeriodsInfo = (creditId: number) => {
    getPayPeriodsByCreditId(creditId).then((res) => {
      console.log(res);
      setPayPeriods(res);
      setHasPayPeriods(res.length > 0);
      setLoading(false);
    }, (err) => {
      if (err.status === 404) {
        setHasPayPeriods(false);
      }
      setLoading(false);
    });
  }

  return (
    <NextUIProvider>
      <section className='grid p-10 text-center gap-y-10'>
        <h2 className='text-3xl'>Estado de cuenta</h2>
        {loading &&
          <div className='w-1/2 mx-auto my-0'>
            <Lottie animationData={searchAnimation} />
            <span>Consultando...</span>
          </div>
        }
        {showForm &&
          <section className='md:flex md:gap-5'>
            <div className='w-auto p-5 bg-white shadow-lg rounded flex flex-col gap-y-20'>
              <article>
                <h3 className='text-2xl'>
                  Bienvenido usuario <span className='text-[#e7ae0a]'>OpenWord</span>
                </h3>
                <p className='text-gray-500'>
                  En la sección de estado de cuenta podrás consultar el estado de tus créditos y pagos pendientes
                </p>
                <p className='text-gray-500'>
                  En un solo lugar encontrarás la información resumida y de fácil lectura, solo ingresa tu número de documento y listo
                </p>
              </article>
              <form
                className='flex flex-col gap-5 items-center'
                onSubmit={handleSubmit}
              >
                <input
                  className='h-12 placeholder-gray-500 border rounded-lg focus:shadow-outline md:w-2/3'
                  type='text'
                  placeholder='Ingresa tu numero de documento'
                  value={dni}
                  onChange={handleDniChange}
                />
                <ReCAPTCHA
                  sitekey="6Le75hIoAAAAAKXtlWaQY1o3XfXXJHqTYPgbFT9Y"
                  ref={recaptchaRef}
                />
                <button
                  className='h-12 text-white bg-blue-600 rounded-lg hover:bg-blue-700 w-40'
                  type='submit'
                >
                  Consultar
                </button>
              </form>
            </div>
            <div className='hidden md:block'>
              <Lottie className='max-h-96' animationData={creditAnimation} />
            </div>
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
        {hasApplications && !showForm && !loading &&
          <>
            <ApplicationsTable data={applications}></ApplicationsTable>
            {hasCredits && <CreditsTable data={credits}></CreditsTable>}
            {hasPayPeriods && <PayPeriods data={payPeriods} />}
            <button
              className='w-50 h-12 text-white bg-blue-600 rounded-lg hover:bg-blue-700'
              onClick={() => router.push('/')}
            >
              Volver a la pagina de inicio
            </button>
          </>
        }
      </section>
    </NextUIProvider>
  );
}

export default AccountStatusPage;

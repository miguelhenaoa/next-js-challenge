'use client';
import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import toast from 'react-hot-toast';
import Docs from '../../components/Forms/Docs';
import LoanInfo from '../../components/Forms/LoanInfo';
import PersonalInfo from '../../components/Forms/Personalnfo';
import FormCard from '../../components/form-card';
import checkAnimation from '../../public/animations/check.json';
import loadingAnimation from '../../public/animations/loading.json';
import { create } from '../../services/ClientService';
import { application } from '../../services/CreditApplicationService';
import { messages } from '../../utils/constants/messages';
import { STATUS_CODE } from '../../utils/constants/status-codes';
import { ClientMapper, ClientRequestPayload } from '../../utils/interfaces/client';
import { CreditApplicationPayload } from '../../utils/interfaces/credit-application';

export default function RegisterPage() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [data, setData] = useState({} as any);
  const [loading, setLoading] = useState(false);
  const [check, setSend] = useState(false);
  const router = useRouter();
  const [formStep, setFormStep] = useState(0);
  const nextFormStep = (data: any) => {
    setData((currentData: any) => ({ ...currentData, ...data }));
    setFormStep((currentStep) => currentStep + 1)
  };
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  const onSubmit = useCallback((files: any) => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }
    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
      try {
        setData((currentData: any) => ({ ...currentData, ...files }));
        setLoading(true);
        const { tipo_moneda, valor_credito_total, cuotas_credito, duracion_credito, ...client } = data;
        const payload: ClientRequestPayload = ClientMapper.toRequest({
          ...client,
          ...files,
          createdAt: new Date(),
          updatedAt: new Date()
        });

        create(payload).then((response) => {
          if (response.status === STATUS_CODE.CREATED) {
            const creditApplication: CreditApplicationPayload = {
              tipo_moneda,
              valor_credito_total,
              tasa_interes: 0,
              cuotas_credito,
              duracion_credito,
              preapobado_form_tiempos: 3,
              estado_externo: 3,
              fecha_aprobacion: new Date().toISOString(),
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              cedula_cliente: client.dni,
            };
            application(creditApplication).then((response) => {
              if (response.status === STATUS_CODE.CREATED) {
                setLoading(false);
                setSend(true);
                toast.success(messages[response.status]);
                setTimeout(() => {
                  router.push('/');
                }, 3000);
              } else {
                toast.error(messages[response.status]);
                setLoading(false);
              }
            }, (error) => {
              toast.error(messages[error.status]);
              setLoading(false);
            });
          } else {
            toast.error(messages[response.status]);
            setLoading(false);
          }
        }, (error) => {
          toast.error(messages[error.status]);
          setLoading(false);
          setSend(false);
        });
      } catch (error: any) {
        toast.error(messages[error.status]);
        setLoading(false);
      }
    });
  }, [executeRecaptcha, data, router]);

  return (
    !loading && !check ?
      <FormCard className='py-4 px-1 my-4 mx-4 sm:px-10 lg:px-20 lg:mx-40 bg-white' currentStep={formStep} prevFormStep={prevFormStep}>
        {formStep === 0 && <PersonalInfo formData={data} nextFormStep={nextFormStep} />}
        {formStep === 1 && <LoanInfo formData={data} nextFormStep={nextFormStep} prevFormStep={prevFormStep} />}
        {formStep === 2 && <Docs formData={data} nextFormStep={nextFormStep} prevFormStep={prevFormStep} sendForm={onSubmit} />}
      </FormCard>
      :
      <div className='max-w-2xl m-auto my-0	text-center'>
        {loading &&
          <>
            <Lottie animationData={loadingAnimation} />
            <span>Enviando...</span>
          </>
        }
        {check &&
          <>
            <Lottie animationData={checkAnimation} loop={false} />
            <span>Vamos a dirigirte a la página principal.</span>
          </>
        }
      </div>
  );
}

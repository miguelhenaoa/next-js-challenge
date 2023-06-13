'use client';
import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
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
import { CreditApplicationRequestMapper } from '../../utils/interfaces/credit-application';

export default function RegisterPage() {
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

  const onSubmit = (files: any) => {
    try {
      setData((currentData: any) => ({ ...currentData, ...files }));
      setLoading(true);
      const { currencyType, amount, deadline, ...client } = data;
      const payload: ClientRequestPayload = ClientMapper.toRequest({
        ...client,
        ...files,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      create(payload).then((response) => {
        if (response.status === STATUS_CODE.CREATED) {
          const creditApplication = CreditApplicationRequestMapper.toRequest({
            currencyType,
            amount,
            deadline,
            internalApproved: 3,
            externalApproved: 3,
            approvalDate: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
            clientDNI: client.dni,
            tasaInteres: 0,
          });
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

  };

  return (
    !loading && !check ?
      <FormCard className='py-4 px-1 my-4 mx-4 md:px-10 lg:px-20 lg:mx-40 bg-white' currentStep={formStep} prevFormStep={prevFormStep}>
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

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputFile from '../InputFile';

interface DocsProps {
  nextFormStep: (data: any) => void;
  prevFormStep: () => void;
  sendForm: (data: any) => void;
  formData: any;
}

const form = ['frontSideDNI', 'backSideDNI', 'salaryReceipts', 'lastSalaryReceipt', 'publicServicesReceipts']

export default function Docs({ sendForm, prevFormStep, formData }: DocsProps) {
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
  const data = watch();

  useEffect(() => {
    Object.keys(form).forEach((key) => formData[key] && setValue(key, formData[key]));
  }, [setValue, formData]);

  const onSubmit = () => sendForm(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='shadow-lg p-10 rounded'>
        <h2 className="text-base font-semibold leading-7 text-gray-900">Soportes documentales</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <InputFile
            {...register("frontSideDNI", { required: true })}
            label='Documento de identificación - Anverso'
            id='cover-photo-1'
            className='col-span-3'
            hasError={errors.frontSideDNI}
            image='/images/id-card-front-side.svg'
          />
          <InputFile
            {...register("backSideDNI", { required: true })}
            label='Documento de identificación - Reverso'
            id='cover-photo-2'
            className='col-span-3'
            hasError={errors.backSideDNI}
            image='/images/id-card-back-side.svg'
          />
          <InputFile
            {...register("salaryReceipts", { required: true })}
            label='Salario - Soporte'
            id='cover-photo-3'
            className='col-span-2 md:col-span-3'
            hasError={errors.salaryReceipts}
          />
          <InputFile
            {...register("lastSalaryReceipt", { required: true })}
            label='Salario - Soporte último mes'
            id='cover-photo-4'
            className='col-span-2 md:col-span-3'
            hasError={errors.lastSalaryReceipt}
          />
          <InputFile
            {...register("publicServicesReceipts", { required: true })}
            label='Servicios públicos - Soporte'
            id='cover-photo-5'
            className='col-span-2 sm:col-span-full'
            hasError={errors.publicServicesReceipts}
          />
        </div>
        <div className="flex items-center pt-6">
          <input {...register("termsAndConditions", { required: true })} id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Acepto los <a target='_blank' href='/terms' className="text-blue-600 dark:text-blue-500 hover:underline">términos y condiciones</a>.
          </label>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button onClick={prevFormStep} type="button" className="rounded-md px-3 py-2 text-sm font-semibold text-gray shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">ATRÁS</button>
        <button type="submit" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">ENVIAR</button>
      </div>
    </form>
  );
}

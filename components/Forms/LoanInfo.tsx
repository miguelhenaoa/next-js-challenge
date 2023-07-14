import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { currencyTypes } from '../../utils/constants/currency-type';
import { deadlines } from '../../utils/constants/deadlines';
import { creditDuration } from '../../utils/constants/credit-duration';
import styles from './Forms.module.css';


interface LoanInfoProps {
  nextFormStep: (data: any) => void;
  prevFormStep: () => void;
  formData: any;
}

export default function LoanInfo({ nextFormStep, prevFormStep, formData }: LoanInfoProps) {
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm(formData);
  const data = watch();

  useEffect(() => {
    setValue('tipo_moneda', '1');
    setValue('valor_credito_total', formData?.valor_credito_total);
    setValue('cuotas_credito', '1');
    setValue('duracion_credito', '1');
  }, [setValue, formData]);

  const onSubmit = () => {
    nextFormStep(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='shadow-lg p-10 rounded'>
        <h2 className="text-base font-semibold leading-7 text-gray-900">Información del Préstamo</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <label htmlFor="tipo_moneda" className={`${styles.label} block text-sm font-medium leading-6 text-gray-900`}>
              Selecciona el tipo de moneda que deseas
            </label>
            <div className="mt-2">
              <select
                {...register("tipo_moneda", { required: true })}
                id="tipo_moneda"
                autoComplete="tipo_moneda"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {currencyTypes.map((currencyType) => (
                  <option key={currencyType.value} value={currencyType.value}>{currencyType.name}</option>
                ))}
              </select>
              {errors.tipo_moneda && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="valor_credito_total" className={`${styles.label} block text-sm font-medium leading-6 text-gray-900`}>
              ¿Qué monto necesitas?
            </label>
            <div className="mt-2">
              <input
                {...register("valor_credito_total", { required: true, min: 1 })}
                type="number"
                id="valor_credito_total"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Ingresa el monto"
              />
              {errors.valor_credito_total && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="cuotas_credito" className={`${styles.label} block text-sm font-medium leading-6 text-gray-900`}>
              ¿Cada cuánto tiempo pagarás?
            </label>
            <div className="mt-2">
              <select
                {...register("cuotas_credito", { required: true })}
                id="cuotas_credito"
                autoComplete="cuotas_credito"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {deadlines.map((deadline) => (
                  <option key={deadline.value} value={deadline.value}>{deadline.name}</option>
                ))}
              </select>
              {errors.cuotas_credito && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="duracion_credito" className={`${styles.label} block text-sm font-medium leading-6 text-gray-900`}>
              Plazo del crédito
            </label>
            <div className="mt-2">
              <select
                {...register("duracion_credito", { required: true })}
                id="duracion_credito"
                autoComplete="duracion_credito"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {creditDuration.map((duration) => (
                  <option key={duration.value} value={duration.value}>{duration.name}</option>
                ))}
              </select>
              {errors.duracion_credito && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>

        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button onClick={prevFormStep} type="button" className="rounded-md px-3 py-2 text-sm font-semibold text-gray shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">ATRÁS</button>
        <button type="submit" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">SIGUIENTE</button>
      </div>
    </form>
  )

}
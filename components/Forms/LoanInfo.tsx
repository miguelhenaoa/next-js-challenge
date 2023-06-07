import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { currencyTypes } from '../../utils/constants/currency-type';
import { deadlines } from '../../utils/constants/deadlines';

interface LoanInfoProps {
  nextFormStep: (data: any) => void;
  prevFormStep: () => void;
  formData: any;
  animationClasses?: string;
}

export default function LoanInfo({ nextFormStep, prevFormStep, formData, animationClasses }: LoanInfoProps) {
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm(formData);
  const data = watch();

  useEffect(() => {
    setValue('currencyType', '1');
    setValue('amount', formData?.amount);
    setValue('deadline', '1');
  }, [setValue, formData]);

  const onSubmit = () => {
    nextFormStep(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`${animationClasses} shadow-lg p-10 rounded`}>
        <h2 className="text-base font-semibold leading-7 text-gray-900">Información del Préstamo</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <label htmlFor="currency-type" className="block text-sm font-medium leading-6 text-gray-900">
              Tipo de moneda
            </label>
            <div className="mt-2">
              <select
                {...register("currencyType", { required: true })}
                id="currency-type"
                autoComplete="currency-type"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {currencyTypes.map((currencyType) => (
                  <option key={currencyType.value} value={currencyType.value}>{currencyType.name}</option>
                ))}
              </select>
              {errors.currencyType && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
              Monto
            </label>
            <div className="mt-2">
              <input
                {...register("amount", { required: true, min: 1 })}
                type="number"
                id="amount"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Ingresa el monto"
              />
              {errors.amount && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="deadline" className="block text-sm font-medium leading-6 text-gray-900">
              Plazos de pago
            </label>
            <div className="mt-2">
              <select
                {...register("deadline", { required: true })}
                id="deadline"
                autoComplete="deadline"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {deadlines.map((deadline) => (
                  <option key={deadline.value} value={deadline.value}>{deadline.name}</option>
                ))}
              </select>
              {errors.deadline && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
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
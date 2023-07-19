import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { creditDuration } from '../../utils/constants/credit-duration';
import { currencyTypes } from '../../utils/constants/currency-type';
import { deadlines } from '../../utils/constants/deadlines';
import Input from '../Input';
import Select from '../Select';


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
          <Select
            {...register("tipo_moneda", { required: true })}
            label="Selecciona el tipo de moneda que deseas"
            id="tipo_moneda"
            hasError={errors.tipo_moneda}
            options={currencyTypes}
            colSpan={2}
            selectLabel='name'
            selectValue='value'
          />
          <Input
            {...register("valor_credito_total", { required: true, min: 1 })}
            label='¿Qué monto necesitas?'
            type='number'
            id='valor_credito_total'
            hasError={errors.valor_credito_total}
            colSpan={2}
          />
          <Select
            {...register("cuotas_credito", { required: true })}
            label="¿Cada cuánto tiempo pagarás?"
            id="cuotas_credito"
            hasError={errors.cuotas_credito}
            options={deadlines}
            selectLabel='name'
            selectValue='value'
            colSpan={2}
          />
          <Select
            {...register("duracion_credito", { required: true })}
            label="Plazo del crédito"
            id="duracion_credito"
            hasError={errors.duracion_credito}
            options={creditDuration}
            selectLabel='name'
            selectValue='value'
            colSpan={2}
          />
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button onClick={prevFormStep} type="button" className="rounded-md px-3 py-2 text-sm font-semibold text-gray shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">ATRÁS</button>
        <button type="submit" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">SIGUIENTE</button>
      </div>
    </form>
  )

}
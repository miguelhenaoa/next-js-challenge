import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { callSigns } from '../../utils/constants/callsign';
import { cities } from '../../utils/constants/cities';
import { documentTypes } from '../../utils/constants/document-type';
import Input from '../Input';
import Select from '../Select';

interface PersonalInfoProps {
  formData: any;
  nextFormStep: (data: any) => void;
}

export default function PersonalInfo({ nextFormStep, formData }: PersonalInfoProps) {
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
  const data = watch();

  useEffect(() => {
    Object.keys(formData).forEach((key) => formData[key] && setValue(key, formData[key]));
  }, [setValue, formData]);

  const onSubmit = () => {
    nextFormStep(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='shadow-lg p-10 rounded'>
        <h2 className="text-base font-semibold leading-7 text-gray-900">Información Personal</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-rows md:grid-cols-6">
          <Select
            {...register("typeDocument", { required: true })}
            label='Tipo de documento'
            id='document-type'
            hasError={errors.typeDocument}
            colSpan={2}
            selectLabel='name'
            selectValue='value'
            options={documentTypes}
          />
          <Input
            {...register('dni', { required: true })}
            label='Número de documento'
            type='number'
            id='dni'
            hasError={errors.dni}
            colSpan={2}
          />
          <Input
            {...register("optionalIdentifier")}
            label='Identificador opcional'
            type='text'
            id='optional-identifier'
            hasError={errors.optionalIdentifier}
            colSpan={2}
          />
          <Input
            {...register("firstName", { required: true })}
            label='Primer nombre'
            type='text'
            id='first-name'
            hasError={errors.firstName}
            colSpan={3}
          />
          <Input
            {...register("secondName", { required: true })}
            label='Segundo nombre'
            type='text'
            id='second-name'
            hasError={errors.secondName}
            colSpan={3}
          />
          <Input
            {...register("firstLastName", { required: true })}
            label='Primer apellido'
            type='text'
            id='first-last-name'
            hasError={errors.firstLastName}
            colSpan={3}
          />
          <Input
            {...register("secondLastName", { required: true })}
            label='Segundo apellido'
            type='text'
            id='second-last-name'
            hasError={errors.secondLastName}
            colSpan={3}
          />
          <Input
            {...register("email", { required: true })}
            label='Correo electrónico'
            type='email'
            id='email'
            hasError={errors.email}
            colSpan={3}
          />
          <Select
            {...register("callSign", { required: true })}
            label='Indicativo'
            id='call-sign'
            hasError={errors.callSign}
            colSpan={1}
            selectLabel='name'
            selectValue='code'
            options={callSigns}
          />
          <Input
            {...register("phone", { required: true })}
            label='Número de teléfono'
            type='tel'
            id='phone-number'
            hasError={errors.phone}
            colSpan={2}
          />
          <Input
            {...register("address", { required: true })}
            label='Dirección'
            type='text'
            id='street-address'
            hasError={errors.address}
            colSpan={3}
          />
          <Select
            {...register("city", { required: true })}
            label='Ciudad'
            id='city'
            hasError={errors.city}
            colSpan={2}
            options={cities}
          />

          <Input
            {...register("zipCode", { required: true })}
            label='ZIP / Código postal'
            type='number'
            id='postal-code'
            hasError={errors.zipCode}
            colSpan={2}
          />

          <Input
            {...register("workAddress", { required: true })}
            label='Dirección de trabajo'
            type='text'
            id='job-address'
            hasError={errors.workAddress}
            colSpan={3}
          />
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="submit" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">SIGUIENTE</button>
      </div>
    </form >
  )
}
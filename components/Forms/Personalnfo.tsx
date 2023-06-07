import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { documentTypes } from '../../utils/constants/document-type';
import { callSigns } from '../../utils/constants/callsign';
import { cities } from '../../utils/constants/cities';

interface PersonalInfoProps {
  formData: any;
  nextFormStep: (data: any) => void;
  animationClasses?: string;
}

export default function PersonalInfo({ nextFormStep, formData, animationClasses }: PersonalInfoProps) {
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
  const data = watch();

  useEffect(() => {
    setValue('typeDocument', '1');
    setValue('callSign', "+598");
    setValue('city', '25 de Agosto');
    Object.keys(formData).forEach((key) => formData[key] && setValue(key, formData[key]));
  }, [setValue, formData]);

  const onSubmit = () => {
    nextFormStep(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`${animationClasses} shadow-lg p-10 rounded`}>
        <h2 className="text-base font-semibold leading-7 text-gray-900">Información Personal</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-rows md:grid-cols-6">
          <div className="md:col-span-2">
            <label htmlFor="document-type" className="block text-sm font-medium leading-6 text-gray-900">
              Tipo de documento
            </label>
            <div className="mt-2">
              <select
                {...register("typeDocument", { required: false })}
                id="document-type"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {documentTypes.map((documentType) => (
                  <option key={documentType.value} value={documentType.value}>{documentType.name}</option>
                ))}
              </select>
              {errors.typeDocument && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="dni" className="block text-sm font-medium leading-6 text-gray-900">
              Número de documento
            </label>
            <div className="mt-2">
              <input
                {...register("dni", { required: false })}
                type="number"
                id="dni"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.dni && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="optional-identifier" className="block text-sm font-medium leading-6 text-gray-900">
              Identificador opcional
            </label>
            <div className="mt-2">
              <input
                {...register("optionalIdentifier")}
                type="text"
                id="optional-identifier"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.optionalIdentifier && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>
          <div className="md:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Primer nombre
            </label>
            <div className="mt-2">
              <input
                {...register("firstName", { required: false })}
                type="text"
                id="first-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.firstName && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>
          <div className="md:col-span-3">
            <label htmlFor="second-name" className="block text-sm font-medium leading-6 text-gray-900">
              Segundo nombre
            </label>
            <div className="mt-2">
              <input
                {...register("secondName", { required: false })}
                type="text"
                id="second-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.secondName && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>

          <div className="md:col-span-3">
            <label htmlFor="first-last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Primer apellido
            </label>
            <div className="mt-2">
              <input
                {...register("firstLastName", { required: false })}
                type="text"
                id="first-last-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.firstLastName && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>

          <div className="md:col-span-3">
            <label htmlFor="second-last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Segundo apellido
            </label>
            <div className="mt-2">
              <input
                {...register("secondLastName", { required: false })}
                type="text"
                id="second-last-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.secondLastName && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>

          <div className="md:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Correo electrónico
            </label>
            <div className="mt-2">
              <input
                {...register("email", { required: false })}
                id="email"
                type="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>

          <div className='md:col-span-1'>
            <label htmlFor="call-sign" className="block text-sm font-medium leading-6 text-gray-900">
              Indicativo
            </label>
            <div className="mt-2">
              <select
                {...register("callSign", { required: false })}
                id="call-sign"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {callSigns.map((callSign) => (
                  <option key={callSign.code} value={callSign.code}>({callSign.code}) {callSign.name}</option>
                ))}
              </select>
              {errors.callSign && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
              Número de teléfono
            </label>
            <div className="mt-2">
              <input
                {...register("phone", { required: false })}
                type="tel"
                id="phone-number"
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
              />
              {errors.phone && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>

          <div className="md:col-span-3">
            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
              Dirección
            </label>
            <div className="mt-2">
              <input
                {...register("address", { required: false })}
                type="text"
                id="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.address && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
              Ciudad
            </label>
            <div className="mt-2">
              <select
                {...register("city", { required: false })}
                id="city"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {errors.city && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
              ZIP / Código postal
            </label>
            <div className="mt-2">
              <input
                {...register("zipCode", { required: false })}
                type="number"
                id="postal-code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.zipCode && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>

          <div className='md:col-span-3'>
            <label htmlFor="job-address" className="block text-sm font-medium leading-6 text-gray-900">
              Dirección de trabajo
            </label>
            <div className="mt-2">
              <input
                {...register("workAddress", { required: false })}
                type="text"
                id="job-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.workAddress && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="submit" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">SIGUIENTE</button>
      </div>
    </form >
  )
}
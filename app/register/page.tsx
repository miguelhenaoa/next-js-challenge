"use client";
import { PhotoIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { cities } from '../../utils/constants/cities'
import { callSigns } from '../../utils/constants/callsign';
import { currencyTypes } from '../../utils/constants/currency-type';
import { deadlines } from '../../utils/constants/deadlines';
import { documentTypes } from '../../utils/constants/document-type';
import { ClientMapper, ClientRequestPayload, ClientResponsePayload } from "../../utils/interfaces/client";
import { postClient } from '../../services/ClientService';
import { STATUS_CODE } from '../../utils/constants/status-codes';
import { messages } from '../../utils/constants/messages';


export default function RegisterPage() {
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
  const router = useRouter();
  const data = watch();

  useEffect(() => {
    setValue('typeDocument', '1');
    setValue('callSign', "+598");
    setValue('city', '25 de Agosto');
    setValue('currencyType', '1');
    setValue('amount', '0');
    setValue('deadline', '1');
  }, [setValue]);

  const onSubmit = () => {
    const { currencyType, amount, deadline, ...client } = data;
    const payload: ClientRequestPayload = ClientMapper.toRequest({
      ...client as ClientResponsePayload,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    postClient(payload).then((response) => {
      if (response.status === STATUS_CODE.CREATED) {
        toast.success(messages[response.status]);
        router.push('/');
      } else {
        toast.error(messages[response.status]);
      }
    }, (error) => {
      toast.error(messages[error.status]);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='py-4 px-5 md:px-10 lg:px-60'>
      <h1 className='text-2xl md:text-3xl pb-3'>Formulario de registro</h1>
      <div className="border-t border-b border-gray-900/10 pb-12 pt-6">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Información Personal</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-rows md:grid-cols-6">
          <div className="md:col-span-2">
            <label htmlFor="document-type" className="block text-sm font-medium leading-6 text-gray-900">
              Tipo de documento
            </label>
            <div className="mt-2">
              <select
                {...register("typeDocument", { required: true })}
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
                {...register("dni", { required: true })}
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
                {...register("firstName", { required: true })}
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
                {...register("secondName", { required: true })}
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
                {...register("firstLastName", { required: true })}
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
                {...register("secondLastName", { required: true })}
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
                {...register("email", { required: true })}
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
                {...register("callSign", { required: true })}
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
                {...register("phone", { required: true })}
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
                {...register("address", { required: true })}
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
                {...register("city", { required: true })}
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
                {...register("zipCode", { required: true })}
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
                {...register("workAddress", { required: true })}
                type="text"
                id="job-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.workAddress && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900 pt-12">Información del Préstamo</h2>
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
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900 pt-12">Soportes documentales</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-3">
            <label htmlFor="cover-photo-1" className="block text-sm font-medium leading-6 text-gray-900">
              Documento de identificación - Anverso
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload-1"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Subir archivo</span>
                    <input
                      {...register("frontSideDNI", { required: true })}
                      id="file-upload-1"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">o arrastra y suelta</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG hasta 10MB</p>
              </div>
            </div>
            {errors.frontSideDNI && <span className='text-red-500 text-xs'>Este archivo es requerido</span>}
          </div>
          <div className="col-span-3">
            <label htmlFor="cover-photo-2" className="block text-sm font-medium leading-6 text-gray-900">
              Documento de identificación - Reverso
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload-2"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Subir archivo</span>
                    <input
                      {...register("backSideDNI", { required: true })}
                      id="file-upload-2"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">o arrastra y suelta</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG hasta 10MB</p>
              </div>
            </div>
            {errors.backSideDNI && <span className='text-red-500 text-xs'>Este archivo es requerido</span>}
          </div>
          <div className="col-span-2 md:col-span-3">
            <label htmlFor="cover-photo-3" className="block text-sm font-medium leading-6 text-gray-900">
              Salario - Soporte
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload-3"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Subir archivo</span>
                    <input
                      {...register("salaryReceipts", { required: true })}
                      id="file-upload-3"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">o arrastra y suelta</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG hasta 10MB</p>
              </div>
            </div>
            {errors.salaryReceipts && <span className='text-red-500 text-xs'>Este archivo es requerido</span>}
          </div>
          <div className="col-span-2 md:col-span-3">
            <label htmlFor="cover-photo-4" className="block text-sm font-medium leading-6 text-gray-900">
              Salario - Soporte último mes
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload-4"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Subir archivo</span>
                    <input
                      {...register("lastSalaryReceipt", { required: true })}
                      id="file-upload-4"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">o arrastra y suelta</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG hasta 10MB</p>
              </div>
            </div>
            {errors.lastSalaryReceipt && <span className='text-red-500 text-xs'>Este archivo es requerido</span>}
          </div>
          <div className="col-span-2 sm:col-span-full">
            <label htmlFor="cover-photo-5" className="block text-sm font-medium leading-6 text-gray-900">
              Servicios públicos - Soporte
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload-5"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Subir archivo</span>
                    <input
                      {...register("publicServicesReceipts", { required: true })}
                      id="file-upload-5"
                      type="file"
                      className="sr-only"
                      multiple={false}
                    />
                  </label>
                  <p className="pl-1">o arrastra y suelta</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG hasta 10MB</p>
              </div>
            </div>
            {errors.publicServicesReceipts && <span className='text-red-500 text-xs'>Este archivo es requerido</span>}
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => { router.push('/') }}>CANCELAR</button>
        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">GUARDAR</button>
      </div>
    </form>
  );
}

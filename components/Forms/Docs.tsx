import { PhotoIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

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

  const onSubmit = () => {
    sendForm(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='shadow-lg p-10 rounded'>
        <h2 className="text-base font-semibold leading-7 text-gray-900">Soportes documentales</h2>
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
        <button onClick={prevFormStep} type="button" className="rounded-md px-3 py-2 text-sm font-semibold text-gray shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">ATRÁS</button>
        <button type="submit" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">ENVIAR</button>
      </div>
    </form>
  );
}
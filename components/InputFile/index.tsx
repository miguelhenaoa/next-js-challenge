
'use client'
import { PhotoIcon } from '@heroicons/react/24/solid';
import { Ref, forwardRef, useState } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import Image from 'next/image';
import styles from '../Input/Input.module.css';


interface Props {
  label: string | undefined;
  hasError: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  id?: string;
  className: string;
  helperText?: string;
  image?: string;
}

function InputFile({ label, id, hasError, className, helperText, image, ...props }: Props, ref: Ref<HTMLInputElement>) {
  const [fileName, setFileName] = useState<string>('');
  const [hasTypeError, setHasTypeError] = useState<boolean>(false);
  const showFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setFileName(file.name);
      if (!file.type.startsWith('image/')) {
        setHasTypeError(true);
      }
    }
  };

  return (
    <div className={className}>
      <label className={`${styles.label} block text-sm font-medium leading-6 text-gray-900`}>
        {label}
      </label>
      <div className={`mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 ${(hasError || hasTypeError) && 'border-red-500'} `}>
        <div className="text-center">
          {image ?
            <Image
              className={`mx-auto h-12 w-12 text-gray-300 ${fileName && 'text-green-600'}`}
              src={image}
              alt='upload'
              width={48}
              height={48}
            /> :
            <PhotoIcon className={`mx-auto h-12 w-12 text-gray-300 ${fileName && 'text-green-600'}`} aria-hidden="true" />
          }

          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor={id}
              className="w-full text-center relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Selecciona un archivo de tus documentos</span>
              <input
                {...props}
                ref={ref}
                id={id}
                type="file"
                className="sr-only"
                multiple={false}
                accept='image/*'
                onChange={showFileName}
              />
            </label>
          </div>
          {
            fileName ?
              <p className="text-xs leading-5 text-green-600">Archivo seleccionado: {fileName}</p> :
              <p className="text-xs leading-5 text-gray-600">Formatos permitidos: .jpg, .png</p>
          }
        </div>
      </div>
      {hasError && <span className='text-red-500 text-xs'>Este archivo es requerido</span>}
      {hasTypeError && <span className='text-red-500 text-xs'>Formato incorrecto, el archivo debe ser una imagen, recuerda que las extensiones permitidas son .jpg y .png</span>}
    </div>
  );
}

export default forwardRef(InputFile);


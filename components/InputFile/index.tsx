
import { PhotoIcon } from '@heroicons/react/24/solid';
import { Ref, forwardRef } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import styles from '../Input/Input.module.css';


interface Props {
  label: string;
  hasError: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  id?: string;
  className: string;
  helperText?: string;
}

function InputFile({ label, id, hasError, className, helperText, ...props }: Props, ref: Ref<HTMLInputElement>) {
  return (
    <div className={className}>
      <label htmlFor="cover-photo-1" className={`${styles.label} block text-sm font-medium leading-6 text-gray-900`}>
        {label}
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor={id}
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Subir archivo</span>
              <input
                {...props}
                ref={ref}
                id={id}
                type="file"
                className="sr-only"
                multiple={false}
                accept='image/*'
              />
            </label>
            <p className="pl-1">o arrastra y suelta</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">PNG, JPG hasta 10MB</p>
        </div>
      </div>
      {hasError && <span className='text-red-500 text-xs'>Este archivo es requerido</span>}
    </div>
  );
}

export default forwardRef(InputFile);


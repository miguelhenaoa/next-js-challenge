import { Ref, forwardRef } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import styles from './Input.module.css';

interface Props {
  label: string;
  type: 'text' | 'email' | 'number' | 'tel';
  hasError: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  id?: string;
  colSpan: number;
}

function Input({ type, label, id, hasError, colSpan, ...props }: Props, ref: Ref<HTMLInputElement>) {

  return (
    <div className={`md:col-span-${colSpan}`}>
      <label htmlFor={id} className={`${styles.label} block text-sm font-medium leading-6 text-gray-900`}>
        {label}
      </label>
      <div className="mt-2">
        <input
          {...props}
          type={type}
          id={id}
          ref={ref}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {hasError && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
      </div>
    </div>
  );
}

export default forwardRef(Input);

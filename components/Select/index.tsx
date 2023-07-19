import { LegacyRef, forwardRef } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import styles from '../Input/Input.module.css';

interface Props {
  label: string;
  hasError: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  id?: string;
  colSpan: number;
  selectLabel?: string;
  selectValue?: string;
  options: any[];
  helperText?: string;
}

function Select({ label, id, hasError, colSpan, selectLabel, selectValue, options, helperText, ...props }: Props, ref: LegacyRef<HTMLSelectElement>) {
  return (
    <div className={`md:col-span-${colSpan}`}>
      <label htmlFor={id} className={`${styles.label} block text-sm font-medium leading-6 text-gray-900`}>
        {label}
      </label>
      <div className="mt-2">
        <select
          {...props}
          ref={ref}
          id="document-type"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          {options.map((option) => (
            <option
              key={selectValue ? option[selectValue] : option}
              value={selectValue ? option[selectValue] : option}
            >
              {selectLabel ? option[selectLabel] : option}
            </option>
          ))}
        </select>
        {helperText && <p className="text-gray-500 text-xs">{helperText}</p>}
        {hasError && <span className='text-red-500 text-xs'>Este campo es requerido</span>}
      </div>
    </div>
  );
}

export default forwardRef(Select);
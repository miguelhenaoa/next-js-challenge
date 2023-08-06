
'use client';
import { useState } from 'react';

function AccountStatusPage() {
  const [dni, setDni] = useState('');

  const handleDniChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDni(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(dni);
  };

  return (
    <section className='grid p-10 text-center gap-y-10'>
      <h2 className='text-3xl'>Estado de cuenta</h2>
      <p className='text-lg'>
        Ingresa tu numero de documento para consultar tu estado de cuenta
      </p>
      <form
        className='flex flex-col gap-5 items-center'
        onSubmit={handleSubmit}
      >
        <input
          className='h-12 placeholder-gray-500 border rounded-lg focus:shadow-outline w-2/3'
          type='text'
          placeholder='Ingresa tu numero de documento'
          value={dni}
          onChange={handleDniChange}
        />
        <button
          className='h-12 text-white bg-blue-600 rounded-lg hover:bg-blue-700 w-40'
          type='submit'
        >
          Consultar
        </button>
      </form>
    </section>
  );
}

export default AccountStatusPage;

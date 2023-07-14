import Image from 'next/image'

export default function TermsAndConditionsPage() {
  return (
    <section className='px-10 py-20 grid grid-cols-1 gap-x-10 lg:grid-cols-5 lg:px-40'>
      <div className='col-span-2 flex flex-col gap-y-5 pb-10' >
        <h2 className='text-2xl font-medium'>Términos y condiciones</h2>
        <p className='font-light'>
          A continuación se presentan los términos y condiciones de uso de la plataforma de préstamos de <span className='font-bold'>OpenWord</span>. Al acceder a la plataforma, el usuario acepta los términos y condiciones de uso.
        </p>
        <Image src={'/images/consent.svg'} width={600} height={600} alt='FAQ' />
      </div>
      <div className='col-span-3'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod aperiam tempore velit. Odio molestias eos deleniti necessitatibus eaque laborum expedita harum dolorum ipsum doloremque, facilis, animi magnam fuga quisquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod aperiam tempore velit. Odio molestias eos deleniti necessitatibus eaque laborum expedita harum dolorum ipsum doloremque, facilis, animi magnam fuga quisquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod aperiam tempore velit. Odio molestias eos deleniti necessitatibus eaque laborum expedita harum dolorum ipsum doloremque, facilis, animi magnam fuga quisquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod aperiam tempore velit. Odio molestias eos deleniti necessitatibus eaque laborum expedita harum dolorum ipsum doloremque, facilis, animi magnam fuga quisquam.
        </p>
      </div>
    </section>
  )
}
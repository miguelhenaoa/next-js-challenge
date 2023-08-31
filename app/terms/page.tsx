'use client';
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
      <article className='flex flex-col col-span-3 gap-y-5 bg-white p-5 font-light'>
        <p>
          OPENWORD SAS (en adelante “Open Word”) brinda Productos y Servicios
          financieros que se encuentran a disposición del Usuario en el Sitio Web.
        </p>
        <p>
          Estos Términos y Condiciones tiene carácter obligatorio y vinculante. Si usted
          no acepta los mismos, por favor abstenerse de utilizar el Sitio Web y de realizar
          cualquier actividad en el mismo.
          El uso por parte del Usuario de cualquier Producto o Servicio disponible en el
          sitio de Open Word implica una aceptación implícita y conocimiento de estos
          Términos y Condiciones.
        </p>
        <ol className='list-decimal'>
          <li className='font-bold'>Alcance</li>
          <p>
            Open Word se reserva el derecho de revisar y modificar unilateralmente estos
            Términos y Condiciones actualizando el presente Sitio Web. Estas condiciones
            adquieren carácter vinculante para todos los usuarios en tanto estén
            publicadas en el Sitio Web de Open Word.
          </p>
          <li className='font-bold'>Uso del sitio</li>
          <p>
            Los Productos y Servicios ofrecidos en el Sitio Web de Open Word se
            encuentran únicamente disponibles en la República Oriental del Uruguay, personas físicas, residentes en Uruguay y que tengan entre 18 y 85 años de
            edad al momento de solicitar el producto o servicio.
            Open Word se reserva el derecho de consultar los antecedentes crediticios del
            Usuario a las entidades pertinentes como parte del proceso de análisis
            crediticio.

            Son causal de caducidad y no otorgamiento de los Productos y Servicios las
            siguientes situaciones:
            <ul className='pl-5 list-disc'>
              <li>Brindar información falsa en los datos del Cliente desde la solicitud del
                producto hasta el retiro del mismo.</li>
              <li>Errores o fallas en el sistema informático de simulación de préstamos.</li>
              <li>Modificación del estado del cliente o sus datos crediticios en el Clering
                de Informes o cualquier entidad pertinente.</li>
              <li>Que el cliente incumpla un contrato ya existente con Open Word.</li>
              <li>Utilización del Servicio o Producto para propósitos ilícitos, infringir la ley,
                o incumplir las presentes condiciones de contratación.</li>
            </ul>
          </p>
          <li className='font-bold'>Responsabilidades de los clientes</li>
          <p>Los Clientes son responsables de los datos e información incluida en los
            formularios ingresados en el Sitio Web. Open Word se reserva el derecho de
            verificar la veracidad de la información brindada, y de excluir del Servicio a los
            clientes que proporcionen datos falsos o inexactos.</p>
          <li className='font-bold'>Oferta</li>
          <p>El Usuario podrá utilizar el Simulador y realizar una solicitud de Crédito. Open
            Word podrá realizar un análisis crediticio y eventualmente ofrecer al Usuario un
            Servicio o Producto que será válido por …………. Open Word no se encuentra
            obligado a ofrecer, y en caso de Oferta, la misma no implica una obligación.
            Cualquier tipo de Servicio o Producto que ofrezca Open Word será personal e
            intransferible.</p>
          <li className='font-bold'>Protección de datos</li>
          <p>
            El Usuario por el solo hecho de aceptar estos Términos y Condiciones acepta
            que Open Word recolecte los Datos Personales de los Usuarios que serán
            requeridos para la prestación del Servicio y análisis crediticio del Usuario.
            Los Datos Personales recolectados serán tratados con el más alto grado de
            protección tomando las medidas de seguridad necesarias para evitar su
            alteración, pérdida, tratamiento o acceso no autorizado por terceros que
            puedan utilizarlos con propósitos distintos para los que han sido solicitados.
          </p>
          <p>La recolección y tratamientos de Datos Personales será realizada por Open
            Word.</p>
          <p>Los Datos Personales ingresados serán almacenados en la base de Datos de
            Open Word.</p>
          <p>El Usuario podrá ejercer su derecho de acceso, rectificación, actualización,
            inclusión o supresión de sus Datos Personales según lo establecido por la Ley
            N.º 18.331 de Protección de Datos Personales. A través del email …….. o en
            los canales de comunicación de Open Word disponibles en el presente Sitio
            Web.</p>
          <li className='font-bold'>Línea de crédito</li>
          <p>(Esto está sujeto a como sea el procedimiento posterior)</p>
          <li className='font-bold'>Ley aplicable y jurisdicción competente </li>
          <p>Todos los Productos y Servicios ofrecidos por en el presente Sitio Web, así
            como la relación entre el Usuario y Open Word, se rigen en todos sus términos
            por las leyes vigentes de la República Oriental del Uruguay.
            Por cualquier controversia o litigio vinculado con el uso del Sitio Web o
            derivadas del presente, las Partes se someten a la jurisdicción y competencia
            exclusiva de los Juzgados de Montevideo, Uruguay o del domicilio del Usuario,
            a elección de Open Word.</p>
        </ol>
      </article>
    </section>
  )
}
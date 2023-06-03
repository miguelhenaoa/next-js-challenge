import Link from 'next/link';
import { Lexend } from 'next/font/google';
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import '../styles/globals.css'

const inter = Lexend({ subsets: ['latin'] })

export const metadata = {
  title: 'Open Word - Landing Page',
  description: 'Generated by create next app',
};

const links = [
  { label: 'Inicio', route: '/' },
  { label: 'Sobre nosotros', route: '/about' },
  // { label: 'Contacto', route: '/contact' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        <header className='border-b border-gray-900/10'>
          <Link href={'/'}>
            <h4>OpenWord</h4>
          </Link>
          <nav>
            <ul className='navigation'>
              {links.map(({ label, route }) => (
                <li className='link' key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <section className='content'>
          {children}
        </section>
        <footer className='grid grid-cols-1 text-center bg-gray-300 p-10 gap-y-10'>
          <div className='flex flex-col gap-x-5 gap-y-5  justify-center sm:flex-row'>
            <Link href={'/about'}>¿Quiénes somos?</Link>
            <Link href={'/faq'}>Preguntas frecuentes</Link>
            <Link href={'/'}>Estados financieros</Link>
            <Link href={'/'}>Factura electrónica</Link>
          </div>
          <div>
            <p>Dir. Bosque 2a Apartamento 302 Bloques del B 9, Ciudad de Maldonado, Uruguay</p>
            <p>Tel. 097111253</p>
          </div>
          <div className='flex flex-row gap-x-5 justify-center'>
            <Link href={'https://www.facebook.com'}>
              <BsFacebook size={30} />
            </Link>
            <Link href={'https://www.linkedin.com'}>
              <BsLinkedin size={30} target='_blank' />
            </Link>
            <Link href={'https://www.twitter.com'}>
              <BsTwitter size={30} />
            </Link>
          </div>
          <p>© 2023 OpenWord. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  )
}

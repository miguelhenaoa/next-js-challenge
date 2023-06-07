import Image from "next/image";
import Link from 'next/link';

interface CardProps {
  className?: string
  title?: string
  description?: string;
  icon?: string;
  link?: string;
  image: string;
}

export default function Card({ className, title, description, image, link }: CardProps) {
  return (
    <div className={`${className} rounded-lg bg-[#e7f6ff] p-5 flex flex-col justify-center`}>
      {title ? <span className='text-lg sm:text-2xl'>{title}</span> : null}
      {description ? <p className='pt-2 font-light	sm:pt-4'>{description}</p> : null}
      {link ?
        <Link href={link} target='_blank'>
          <Image className='mx-auto my-0' src={image} alt={title || 'Image'} width={400} height={400} />
        </Link> :
        <Image className='mx-auto my-0' src={image} alt={title || 'Image'} width={400} height={400} />
      }
    </div>
  )
}
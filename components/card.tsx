import Image from "next/image";

interface CardProps {
  className: string
  title: string
  description?: string;
  icon?: string;
  color: string;
  image: string;
}

export default function Card({ className, title, description, color, image }: CardProps) {
  return (
    <div className={`${className} rounded-lg bg-[#e8e7fe] p-5 flex flex-col justify-center`}>
      <span className='text-lg sm:text-2xl'>{title}</span>
      <p className='pt-2 font-light	sm:pt-4'>{description}</p>
      <Image src={image} alt={title} width={400} height={400}/>
    </div>
  )
} 
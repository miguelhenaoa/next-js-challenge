
interface CardProps {
  className: string
  title: string
  description?: string;
  icon?: string;
  color: string;
}

export default function Card({ className, title, description, color }: CardProps) {
  return (
    <div className={`${className} rounded-lg bg-[${color}] p-5`}>
      <span className='text-lg sm:text-2xl'>{title}</span>
      <p className='pt-2 font-light	sm:pt-4'>{description}</p>
    </div>
  )
} 
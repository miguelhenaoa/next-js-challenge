interface FormCardProps {
  className?: string;
  children: React.ReactNode;
  currentStep: number;
  prevFormStep: () => void;
}

export default function FormCard({ children, currentStep, prevFormStep, className }: FormCardProps) {
  return (
    <div className={className}>
      <h1 className='text-2xl md:text-3xl pb-3'>Formulario de registro</h1>
      {children}
    </div>
  );
}

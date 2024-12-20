"use client";

interface FormWrapperProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children, title, className = "" }) => {
  return (
    <div className={`flex flex-col items-center p-8 space-y-6 min-h-screen ${className}`}>
      <h1 className="text-2xl font-bold">{title}</h1>
      {children}
    </div>
  );
};

export default FormWrapper;

"use client";

interface FormWrapperProps {
  children: React.ReactNode;
  title: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  formClassName?: string; // Custom className for the <form>
  wrapperClassName?: string; // Custom className for the wrapper
}

const FormWrapper: React.FC<FormWrapperProps> = ({
  children,
  title,
  onSubmit,
  formClassName = "",
  wrapperClassName = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center p-8 space-y-6 min-h-screen ${wrapperClassName}`}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      <form
        onSubmit={onSubmit}
        className={`flex flex-col space-y-4 w-full max-w-md ${formClassName}`}
      >
        {children}
      </form>
    </div>
  );
};

export default FormWrapper;

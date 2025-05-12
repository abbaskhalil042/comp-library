interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

const Label = ({ children, htmlFor, className }: LabelProps) => {
  return (
    <>
      <label htmlFor={htmlFor} className={`label ${className}`}>
        {children}
      </label>
    </>
  );
};

export default Label;

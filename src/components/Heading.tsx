interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ children, className }: HeadingProps) => {
  return <h1 className={className}>{children}</h1>;
};

export default Heading;

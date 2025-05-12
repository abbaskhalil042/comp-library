interface BoxProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Box = ({ children, className, style }: BoxProps) => {
  return (
    <div style={{ ...style }} className={`box ${className}`}>
      {children}
    </div>
  );
};

export default Box;

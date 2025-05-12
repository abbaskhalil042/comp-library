interface SpanProps {
  children: React.ReactNode;
  className?: string;
}

const Span = ({ children, className }: SpanProps) => {
  return <span className={className}>{children}</span>;
};

export default Span;

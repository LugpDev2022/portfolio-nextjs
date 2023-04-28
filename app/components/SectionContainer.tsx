interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer: React.FC<Props> = ({ children, className = '' }) => {
  return <div className={`sm:py-15 px-10 py-10 ${className}`}>{children}</div>;
};

export default SectionContainer;

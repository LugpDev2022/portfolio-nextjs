interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <section className={`sm:py-15 px-10 py-10 ${className}`}>
      {children}
    </section>
  );
};

export default SectionContainer;

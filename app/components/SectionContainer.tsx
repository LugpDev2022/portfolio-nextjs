interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer: React.FC<Props> = ({ children, className = '' }) => (
  <section className={`sm:py-15 px-7 py-10 lg:px-10 ${className}`}>
    {children}
  </section>
);

export default SectionContainer;

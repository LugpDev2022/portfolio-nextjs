interface Props {
  children: React.ReactNode;
}

const Subtitle: React.FC<Props> = ({ children }) => (
  <h3 className='text-center text-2xl font-bold tracking-wide text-white'>
    {children}
  </h3>
);

export default Subtitle;

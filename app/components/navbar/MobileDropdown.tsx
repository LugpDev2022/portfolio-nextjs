interface Props {
  show: boolean;
}

const MobileDropdown: React.FC<Props> = ({ show }) => {
  return (
    <ul
      className={`${
        show ? 'block' : 'hidden'
      } float-left mb-2 mt-1 flex w-full flex-col gap-2 rounded-lg bg-[#255880] py-2 pl-8 text-base sm:hidden`}
    >
      <li>
        <a href='#programming-languages'>Languages</a>
      </li>
      <li>
        <a href='#frameworks'>Frameworks</a>
      </li>
      <li>
        <a href='#tools'>Other tools</a>
      </li>
    </ul>
  );
};

export default MobileDropdown;

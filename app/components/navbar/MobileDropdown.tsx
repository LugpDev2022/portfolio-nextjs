interface LinkProps {
  children: React.ReactNode;
  navigateTo: number;
}

const Link: React.FC<LinkProps> = ({ children, navigateTo }) => (
  <li>
    <span
      className='hover:cursor-pointer'
      onClick={() => scrollTo(0, navigateTo - 30)}
    >
      {children}
    </span>
  </li>
);

interface Props {
  show: boolean;
  programmingLanguagesSectionPosition: number;
  frameworksSectionPosition: number;
  toolsSectionPosition: number;
}

const MobileDropdown: React.FC<Props> = ({
  show,
  programmingLanguagesSectionPosition,
  frameworksSectionPosition,
  toolsSectionPosition,
}) => (
  <ul
    className={`${
      show ? 'block' : 'hidden'
    } float-left mb-2 mt-1 flex w-full flex-col gap-2 rounded-lg bg-[#255880] py-2 pl-8 text-base sm:hidden`}
  >
    <Link navigateTo={programmingLanguagesSectionPosition}>Languages</Link>
    <Link navigateTo={frameworksSectionPosition}>Frameworks</Link>
    <Link navigateTo={toolsSectionPosition}>Other Tools</Link>
  </ul>
);

export default MobileDropdown;

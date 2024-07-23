'use client';
import { NavLinkType } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';
import BodyM from '../text/BodyM';
import { cn } from '@/utilities/cn';
import { usePathname } from 'next/navigation';

const NavLink = ({ icon, inactiveIcon, label, path }: NavLinkType) => {
  // const [isActive, setIsActive] = useState<boolean>(false);

  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={cn(
        'flex gap-1 justify-center w-fit min-w-[74px] min-h-[42px] px-[27px] py-[11px] rounded-lg hover:bg-lightgrey',
        pathname === path ? 'bg-lightgrey' : '',
        label === 'Preview'
          ? 'w-fit min-w-fit p-0 md:py-[11px] md:px-[27px] md:border md:border-purple md:rounded-lg'
          : ''
      )}>
      <div className={cn(label === 'Preview' ? 'block md:hidden' : 'block')}>
        <Image alt={label} src={pathname === path ? icon : inactiveIcon} />
      </div>
      <BodyM
        className={cn(
          'hidden md:block ',
          pathname === path ? 'text-purple' : ''
        )}>
        {label}
      </BodyM>
    </Link>
  );
};

export default NavLink;

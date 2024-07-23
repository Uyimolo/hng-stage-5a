import logo from '../../assets/svg/Group 252.svg';
import Image from 'next/image';
import mobileLogo from '../../assets/svg/solar_link-circle-bold.svg';
import { LogoType } from '@/types/type';

const Logo = ({ variant = 'unresponsive' }: LogoType) => {
  if (variant === 'responsive') {
    return (
      <div>
        <Image
          alt='devlink logo'
          src={logo}
          className='w-[140px] hidden md:block'
        />
        <Image alt='devlink logo' src={mobileLogo} className='md:hidden' />
      </div>
    );
  }
  return (
    <div>
      <Image alt='devlink logo' src={logo} className='w-[182.5px] h-10' />
    </div>
  );
};

export default Logo;

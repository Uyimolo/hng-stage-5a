import link from '../../assets/svg/ph_link-bold.svg';
import profileIcon from '../../assets/svg/profile-details.svg';
import preview from '../../assets/svg/publish.svg';
import profileIconInactive from '../../assets/svg/ph_user-circle-bold_inactive.svg';
import linkInactive from '../../assets/svg/ph_link-bold_inactive.svg';
import NavLink from './NavLink';
import Logo from '../brand/Logo';

const navDetails = [
  { label: 'Links', icon: link, inactiveIcon: linkInactive, path: '/' },
  {
    label: 'Profile Details',
    icon: profileIcon,
    inactiveIcon: profileIconInactive,
    path: '/profile',
  },
  { label: 'Preview', icon: preview, path: '/preview', inactiveIcon: preview },
];
const Header = () => {
  return (
    <header className='bg-white p-6'>
      <nav className='flex justify-between place-items-center w-full'>
        <Logo variant='responsive' />
        <div className='flex gap-2 items-center'>
          <NavLink
            key={navDetails[0].label}
            icon={navDetails[0].icon}
            inactiveIcon={navDetails[0].inactiveIcon}
            label={navDetails[0].label}
            path={navDetails[0].path}
          />
          <NavLink
            key={navDetails[1].label}
            icon={navDetails[1].icon}
            inactiveIcon={navDetails[1].inactiveIcon}
            label={navDetails[1].label}
            path={navDetails[1].path}
          />
        </div>
        <NavLink
          key={navDetails[2].label}
          icon={navDetails[2].icon}
          inactiveIcon={navDetails[2].inactiveIcon}
          label={navDetails[2].label}
          path={navDetails[2].path}
        />
      </nav>
    </header>
  );
};

export default Header;

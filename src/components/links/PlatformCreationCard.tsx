import Input from '../forms/Input';
import BodyM from '../text/BodyM';
import link from '../../assets/svg/ph_link-bold_inactive.svg';
import Select from './Select';

const PlatformCreationCard = () => {
  return (
    <div className='bg-lightgrey'>
      {/* top */}
      <div className='flex justify-between'>
        <div className=''>
          <BodyM>Link #1</BodyM>
        </div>

        <div className=''>
          <BodyM>Remove</BodyM>
        </div>
      </div>

      {/* platform selector */}
      <div className=''>
        <Select />
      </div>

      {/* Link input */}
      {/* <Input placeholder='' icon={link}  /> */}
    </div>
  );
};

export default PlatformCreationCard;

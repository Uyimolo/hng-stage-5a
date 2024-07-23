import Button from '../forms/button/Button';
import BodyM from '../text/BodyM';
import Heading from '../text/Heading';
import PlatformCreationCard from './PlatformCreationCard';

const CustomizeLinks = () => {
  return (
    <div className='space-y-12'>
      <div className='space-y-6'>
        <Heading>Customize your links</Heading>
        <BodyM>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </BodyM>
      </div>
      <div className=''>
        <Button type='button' variant='secondary' className=''>
          + Add new link
        </Button>
      </div>
      <PlatformCreationCard  />
    </div>
  );
};

export default CustomizeLinks;

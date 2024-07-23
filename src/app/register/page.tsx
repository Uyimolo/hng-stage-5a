// import { auth } from '../../../firebaseConfig';
// import Image from 'next/image';
import Logo from '@/components/brand/Logo';
import Heading from '@/components/text/Heading';
import BodyM from '@/components/text/BodyM';
import RegistrationForm from '@/components/forms/RegistrationForm';

const RegisterPage = () => {
  return (
    <div className='bg-lightgrey min-h-screen w-full'>
      <div className='p-8 md:p-10 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2'>
        <div className='md:w-fit md:mx-auto'>
          <Logo />
        </div>
        <div className='mt-[60px] md:bg-white md:p-10'>
          <div className='space-y-[40px] md:w-[396px] '>
            <div className='space-y-[8px]'>
              <Heading>Create account</Heading>
              <BodyM>{`Let's get you started sharing your links!`}</BodyM>
            </div>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

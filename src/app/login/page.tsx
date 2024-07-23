// import { auth } from '../../../firebaseConfig';
// import Image from 'next/image';
import Logo from '@/components/brand/Logo';
import Heading from '@/components/text/Heading';
import BodyM from '@/components/text/BodyM';
import LoginForm from '@/components/forms/LoginForm';

const LoginPage = () => {
  return (
    <div className='bg-lightgrey min-h-screen'>
      <div className='p-8 md:w-[476px] md:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='md:w-fit md:mx-auto'>
          <Logo />
        </div>
        <div className='mt-[60px] space-y-[40px] md:p-10 md:bg-white'>
          <div className='space-y-[8px]'>
            <Heading>Login</Heading>
            <BodyM>{`Add your details below to get back into the app`}</BodyM>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

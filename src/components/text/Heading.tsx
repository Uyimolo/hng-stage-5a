import { ElementType } from '@/types/type';
import { cn } from '@/utilities/cn';

const Heading = ({ children, className }: ElementType) => {
  return (
    <h1 className={cn('text-darkgrey font-bold text-2xl md:text-[32px]', className)}>
      {children}
    </h1>
  );
};

export default Heading;

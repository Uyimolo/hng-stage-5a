import { ElementType } from '@/types/type';
import { cn } from '@/utilities/cn';

const BodyM = ({ className, children }: ElementType) => {
  return <p className={cn('text-grey text-base', className)}>{children}</p>;
};

export default BodyM;

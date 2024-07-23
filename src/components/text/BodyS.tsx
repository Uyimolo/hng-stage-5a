import { ElementType } from '@/types/type';
import { cn } from '@/utilities/cn';

const BodyS = ({ className, children }: ElementType) => {
  return <p className={cn('text-grey text-xs', className)}>{children}</p>;
};

export default BodyS;

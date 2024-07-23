import { ButtonType } from '@/types/type';
import { cn } from '@/utilities/cn';

const Button = ({
  className,
  children,
  variant,
  type,
  disabled,
}: ButtonType) => {
  let buttonStyle;

  switch (variant) {
    case 'primary':
      buttonStyle =
        'bg-purple rounded-lg text-white hover:bg-lightpurple hover:shadow hover:shadow-lg disabled:lighterpurple';
      break;
    case 'secondary':
      buttonStyle =
        'bg-white border border-purple text-purple hover:bg-lightpurple disabled:text-lightpurple disabled:border-lightpurple';
      break;
    default:
      buttonStyle = '';
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        'py-[11px] px-[27px] flex text-base rounded-lg font-semibold flex-col justify-center items-center min-w-[227px] w-full gap-8',
        buttonStyle,
        className
      )}>
      {children}
    </button>
  );
};

export default Button;

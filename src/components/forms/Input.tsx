import { InputType } from '@/types/type';
import Image from 'next/image';
import BodyS from '../text/BodyS';
import { cn } from '@/utilities/cn';

const Input = ({
  label,
  type,
  id,
  error,
  required,
  icon,
  placeholder,
  value,
  updateFormField,
}: InputType) => {
  return (
    <div className='space-y-1 w-full'>
      <label htmlFor={id} className='text-xs text-darkgrey'>
        {label}
      </label>
      <div className='relative w-full h-fit'>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={(event) => updateFormField(id, event.target.value)}
          aria-required={required}
          required={required}
          value={value}
          className={cn(
            'rounded-lg py-3 pl-12 pr-4 border text-base text-darkgrey border-border w-full bg-white focus:bg-white hover:border-purple hover:shadow-xl placeholder:text-grey',
            error && 'border border-red text-red hover:border-red'
          )}
        />
        <Image
          src={icon}
          alt={id}
          className='absolute top-1/2 -translate-y-1/2 left-4'
        />
        {error && (
          <BodyS className='hidden text-red absolute top-1/2 -translate-y-1/2 right-3 md:block'>
            {error}
          </BodyS>
        )}
      </div>
    </div>
  );
};

export default Input;

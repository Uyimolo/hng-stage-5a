'use client';
import lock from '../../assets/svg/ph_lock-key-fill.svg';
import mail from '../../assets/svg/ph_envelope-simple-fill.svg';
import Input from './Input';
import BodyS from '../text/BodyS';
import Button from './button/Button';
import BodyM from '../text/BodyM';
import Link from 'next/link';
import { useState } from 'react';
import { RegistrationFieldType } from '@/types/type';
const registrationFormData: RegistrationFieldType[] = [
  {
    label: 'Email address',
    value: '',
    type: 'email',
    id: 'email',
    required: true,
    error: '',
    icon: mail,
    placeholder: 'eg. alex@email.com',
  },
  {
    label: 'Create password',
    type: 'password',
    value: '',
    id: 'password',
    required: true,
    error: '',
    icon: lock,
    placeholder: 'At least 8 characters',
  },
];

const LoginForm = () => {
  const [formData, setFormData] =
    useState<RegistrationFieldType[]>(registrationFormData);

  const validateField = (id: string, value: string): string => {
    let error = '';
    if (id === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
        error = 'Invalid email';
      }
    } else if (id === 'password' || id === 'confirmPassword') {
      if (value.length < 8) {
        error = 'Must be at least 8 characters';
      }
    }
    return error;
  };

  const updateFormField = (id: string, value: string) => {
    const updatedFormData = formData.map((field) =>
      field.id === id
        ? { ...field, value: value, error: validateField(id, value) }
        : field
    );
    setFormData(updatedFormData);
  };

  return (
    <form action='' className='space-y-6 rounded-lg md:rounded-xl'>
      <div className='space-y-6'>
        {formData.map((field) => (
          <Input
            key={field.id}
            label={field.label}
            value={field.value}
            placeholder={field.placeholder}
            type={field.type}
            id={field.id}
            required={field.required}
            error={field.error}
            icon={field.icon}
            updateFormField={updateFormField}
          />
        ))}
      </div>
      <BodyS>Password must contain at least 8 characters</BodyS>
      <Button variant='primary' type='submit'>
        Create new account
      </Button>
      <div className='flex flex-col justify-center md:flex-row md:items-center gap-1'>
        <BodyM className='text-center'>{`Don't have an account?`}</BodyM>
        <Link
          href='/register'
          className='text-purple text-base w-fit mx-auto md:mx-0'>
          Create account
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;

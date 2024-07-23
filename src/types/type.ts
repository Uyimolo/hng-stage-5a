export interface ElementType {
  children: React.ReactNode;
  className?: string;
}

export interface InputType {
  label: string;
  type: string;
  id: string;
  error: string;
  required: boolean;
  icon: string;
  placeholder: string;
  value: string;
  updateFormField: (id: string, value: string) => void;
}

export interface RegistrationFieldType {
  label: string;
  type: string;
  id: string;
  error: string;
  required: boolean;
  icon: string;
  placeholder: string;
  value: string;
}

export interface ButtonType {
  className?: string;
  children: React.ReactNode;
  variant: string;
  disabled?: boolean;
  type: 'submit' | 'reset' | 'button';
  func?: () => void;
}

export interface NavLinkType {
  icon: string;
  inactiveIcon: string;
  label: string;
  path: string;
}

export interface LogoType {
  variant?: 'unresponsive' | 'responsive';
}

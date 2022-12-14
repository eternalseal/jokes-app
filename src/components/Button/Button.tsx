import { cva, VariantProps } from 'class-variance-authority';
import React, { Children } from 'react';
export type ButtonClassProps = VariantProps<typeof button>;
const button = cva(
  ['font-semibold', 'border', 'rounded-full', 'max-w-fit', 'transition-colors'],
  {
    variants: {
      intent: {
        primary: [
          'bg-green-500',
          'text-white',
          'border-transparent',
          'hover:bg-green-600',
        ],
        secondary: [
          'bg-blue-500',
          'text-white',
          'border-transparent',
          'hover:bg-blue-600',
        ],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2'],
        base: ['text-base', 'py-4', 'px-4'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'base',
    },
  },
);

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonClassProps {}

const Button: React.FC<Props> = ({
  intent,
  size,
  children,
  className,
  ...props
}) => {
  return (
    <button {...props} className={button({ intent, size, className })}>
      {children}
    </button>
  );
};

export default Button;

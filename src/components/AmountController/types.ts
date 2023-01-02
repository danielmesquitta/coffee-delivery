import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface AmountControllerProps extends InputProps {
  productId: number;

  index: number;

  addButtonProps?: ButtonProps;

  subtractButtonProps?: ButtonProps;
}

export interface Products {
  amount: number;
}

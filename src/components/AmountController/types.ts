import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';
import { Product } from '~/store/types';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface AmountControllerProps extends InputProps {
  product: Product;

  index: number;

  addButtonProps?: ButtonProps;

  subtractButtonProps?: ButtonProps;
}

export interface Cart {
  amount: number;
}

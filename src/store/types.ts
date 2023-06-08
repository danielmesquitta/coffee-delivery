export type Product = {
  id: number;
  title: string;
  tags: string[];
  description: string;
  price: number;
  imageSrc: string;
};

export interface SelectedProduct extends Product {
  amount?: number;
  totalPrice?: number;
}

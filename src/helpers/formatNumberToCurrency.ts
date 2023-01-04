export const formatNumberToCurrency = (value: number): string => {
  const { format } = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BRL',
  });

  return format(value);
};

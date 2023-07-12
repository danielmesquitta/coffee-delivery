import { formatNumberToCurrency } from './formatNumberToCurrency';

describe('formatNumberToCurrency', () => {
  it('should format decimal places', () => {
    const formattedNumber = formatNumberToCurrency(1000000);

    expect(formattedNumber).toBe('R$ 1.000.000,00');
  });

  it('should format cents', () => {
    const formattedNumber = formatNumberToCurrency(500);

    expect(formattedNumber).toBe('R$ 500,00');
  });
});

import { faker } from '@faker-js/faker';
import { UserStore } from '.';

let userStore: UserStore;

describe('User Store', () => {
  beforeEach(() => {
    userStore = new UserStore();
  });

  it('should be able to set address', () => {
    const address = {
      city: faker.location.city(),
      state: faker.location.state(),
      street: faker.location.street(),
      zipCode: faker.location.zipCode(),
      complement: faker.lorem.sentence(),
      neighborhood: faker.lorem.sentence(),
      number: String(faker.number.int()),
    };

    userStore.setAddress(address);

    expect(userStore.address).toEqual(address);
  });

  it('should be able to set cash payment method', () => {
    userStore.setPaymentMethod('CASH');

    expect(userStore.paymentMethod).toBe('CASH');
  });

  it('should be able to set credit card payment method', () => {
    userStore.setPaymentMethod('CREDIT_CARD');

    expect(userStore.paymentMethod).toBe('CREDIT_CARD');
  });

  it('should be able to set credit debit payment method', () => {
    userStore.setPaymentMethod('DEBIT_CARD');

    expect(userStore.paymentMethod).toBe('DEBIT_CARD');
  });
});

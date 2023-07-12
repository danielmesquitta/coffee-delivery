import { faker } from '@faker-js/faker';
import { CartStore } from '.';

let cartStore: CartStore;

describe('Cart Store', () => {
  beforeEach(() => {
    cartStore = new CartStore();
  });

  it('should be able to add a product to the cart', () => {
    const id = faker.number.int();

    const product = {
      id,
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price: faker.number.float(),
      title: faker.lorem.paragraph(),
      tags: faker.lorem.words().split(' '),
    };

    cartStore.addProduct(product);

    expect(cartStore.cart.length).toBe(1);

    expect(cartStore.cart[0].id).toBe(id);
  });

  it('should be able to increment product amount if adding a product that is already in the cart', () => {
    const product = {
      id: faker.number.int(),
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price: faker.number.float(),
      title: faker.lorem.paragraph(),
      tags: faker.lorem.words().split(' '),
    };

    cartStore.addProduct(product);
    cartStore.addProduct(product);
    cartStore.addProduct(product);

    expect(cartStore.cart.length).toBe(1);

    expect(cartStore.cart[0].id).toBe(product.id);

    expect(cartStore.cart[0].amount).toBe(3);
  });

  it('should be able to calculate product price', () => {
    const price = faker.number.float();

    const product = {
      id: faker.number.int(),
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price,
      title: faker.lorem.paragraph(),
      tags: faker.lorem.words().split(' '),
    };

    cartStore.addProduct(product);
    cartStore.addProduct(product);
    cartStore.addProduct(product);

    expect(cartStore.cart[0].totalPrice).toBe(price * 3);
  });

  it('should be able to sum all product prices to get cart total', () => {
    const price1 = faker.number.float();

    const product1 = {
      id: faker.number.int(),
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price: price1,
      title: faker.lorem.paragraph(),
      tags: faker.lorem.words().split(' '),
    };

    cartStore.addProduct(product1);
    cartStore.addProduct(product1);
    cartStore.addProduct(product1);

    const price2 = faker.number.float();

    const product2 = {
      id: faker.number.int(),
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price: price2,
      title: faker.lorem.paragraph(),
      tags: faker.lorem.words().split(' '),
    };

    cartStore.addProduct(product2);
    cartStore.addProduct(product2);

    expect(cartStore.totalPrice).toBe(price1 * 3 + price2 * 2);
  });

  it('should be able to subtract a product from the cart', () => {
    const price = faker.number.float();

    const initialAmount = 3;

    const product = {
      id: faker.number.int(),
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price,
      tags: faker.lorem.words().split(' '),
      title: faker.lorem.paragraph(),
      amount: initialAmount,
      totalPrice: initialAmount * price,
    };

    cartStore.cart.push(product);

    cartStore.subtractProduct(product.id);

    expect(cartStore.cart.length).toBe(1);

    expect(cartStore.cart[0].amount).toBe(initialAmount - 1);

    expect(cartStore.cart[0].id).toBe(product.id);
  });

  it('should be able to recalculate product total when subtracting a product from the cart', () => {
    const price = faker.number.float();

    const initialAmount = 3;

    const product = {
      id: faker.number.int(),
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price,
      tags: faker.lorem.words().split(' '),
      title: faker.lorem.paragraph(),
      amount: initialAmount,
      totalPrice: initialAmount * price,
    };

    cartStore.cart.push(product);

    cartStore.subtractProduct(product.id);

    expect(cartStore.cart[0].totalPrice).toBe(price * (initialAmount - 1));
  });

  it('should be able to recalculate cart total when subtracting a product from the cart', () => {
    const price = faker.number.float();

    const initialAmount = 3;

    const product1 = {
      id: faker.number.int(),
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price,
      tags: faker.lorem.words().split(' '),
      title: faker.lorem.paragraph(),
      amount: initialAmount,
      totalPrice: initialAmount * price,
    };

    const product2 = {
      id: faker.number.int(),
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price,
      tags: faker.lorem.words().split(' '),
      title: faker.lorem.paragraph(),
      amount: initialAmount,
      totalPrice: initialAmount * price,
    };

    cartStore.cart.push(product1, product2);

    cartStore.subtractProduct(product2.id);

    expect(cartStore.totalPrice).toBe(
      product1.totalPrice + product2.totalPrice - price,
    );
  });

  it('should be able to remove product from the cart when subtracting a product with the amount equals 1', () => {
    const price = faker.number.float();

    const initialAmount = 1;

    const product = {
      id: faker.number.int(),
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price,
      tags: faker.lorem.words().split(' '),
      title: faker.lorem.paragraph(),
      amount: initialAmount,
      totalPrice: initialAmount * price,
    };

    cartStore.cart.push(product);

    cartStore.subtractProduct(product.id);

    expect(cartStore.cart.length).toBe(0);
  });

  it('should be able to remove product', () => {
    const price = faker.number.float();

    const initialAmount = 5;

    const product = {
      id: faker.number.int(),
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price,
      tags: faker.lorem.words().split(' '),
      title: faker.lorem.paragraph(),
      amount: initialAmount,
      totalPrice: initialAmount * price,
    };

    cartStore.cart.push(product);

    cartStore.removeProduct(product.id);

    expect(cartStore.cart.length).toBe(0);
  });

  it('should be able to remove product even when it has multiple products', () => {
    const price = faker.number.float();

    const initialAmount = 5;

    const product1 = {
      id: faker.number.int(),
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price,
      tags: faker.lorem.words().split(' '),
      title: faker.lorem.paragraph(),
      amount: initialAmount,
      totalPrice: initialAmount * price,
    };

    const product2 = {
      id: faker.number.int(),
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price,
      tags: faker.lorem.words().split(' '),
      title: faker.lorem.paragraph(),
      amount: initialAmount,
      totalPrice: initialAmount * price,
    };

    const product3 = {
      id: faker.number.int(),
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price,
      tags: faker.lorem.words().split(' '),
      title: faker.lorem.paragraph(),
      amount: initialAmount,
      totalPrice: initialAmount * price,
    };

    cartStore.cart.push(product1, product2, product3);

    cartStore.removeProduct(product2.id);

    expect(cartStore.cart.length).toBe(2);

    const cartProductIds = cartStore.cart.map((product) => product.id);

    expect(cartProductIds).not.toContain(product2.id);
  });

  it('should be able to empty cart', () => {
    const price = faker.number.float();

    const initialAmount = 5;

    const product1 = {
      id: faker.number.int(),
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price,
      tags: faker.lorem.words().split(' '),
      title: faker.lorem.paragraph(),
      amount: initialAmount,
      totalPrice: initialAmount * price,
    };

    const product2 = {
      id: faker.number.int(),
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price,
      tags: faker.lorem.words().split(' '),
      title: faker.lorem.paragraph(),
      amount: initialAmount,
      totalPrice: initialAmount * price,
    };

    cartStore.cart.push(product1, product2);

    cartStore.emptyCart();

    expect(cartStore.cart.length).toBe(0);
  });

  it('should be able to get product amount', () => {
    const price = faker.number.float();

    const initialAmount = 5;

    const product = {
      id: faker.number.int(),
      description: faker.lorem.paragraph(),
      imageSrc: faker.internet.url(),
      price,
      tags: faker.lorem.words().split(' '),
      title: faker.lorem.paragraph(),
      amount: initialAmount,
      totalPrice: initialAmount * price,
    };

    cartStore.cart.push(product);

    const amount = cartStore.getProductAmount(product.id);

    expect(amount).toBe(initialAmount);
  });

  it('should be able to return 0 when getting amount of a not found product', () => {
    const amount = cartStore.getProductAmount(-1);

    expect(amount).toBe(0);
  });
});

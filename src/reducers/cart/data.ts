const generateRandomPrice = () => Number((5 + Math.random() * 15).toFixed(2));

export const products = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    tags: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: generateRandomPrice(),
    imageSrc: '/cafe-expresso.png',
  },

  {
    id: 2,
    title: 'Expresso Americano',
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: generateRandomPrice(),
    imageSrc: '/cafe-americano.png',
  },

  {
    id: 3,
    title: 'Expresso Cremoso',
    tags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: generateRandomPrice(),
    imageSrc: '/cafe-expresso-cremoso.png',
  },

  {
    id: 4,
    title: 'Expresso Gelado',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: generateRandomPrice(),
    imageSrc: '/cafe-gelado.png',
  },

  {
    id: 5,
    title: 'Café com Leite',
    tags: ['Tradicional', 'Com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: generateRandomPrice(),
    imageSrc: '/cafe-com-leite.png',
  },

  {
    id: 6,
    title: 'Latte',
    tags: ['Tradicional', 'Com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: generateRandomPrice(),
    imageSrc: '/cafe-latte.png',
  },

  {
    id: 7,
    title: 'Capuccino',
    tags: ['Tradicional', 'Com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: generateRandomPrice(),
    imageSrc: '/cafe-capuccino.png',
  },

  {
    id: 8,
    title: 'Macchiato',
    tags: ['Tradicional', 'Com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: generateRandomPrice(),
    imageSrc: '/cafe-macchiato.png',
  },

  {
    id: 9,
    title: 'Mocaccino',
    tags: ['Tradicional', 'Com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: generateRandomPrice(),
    imageSrc: '/cafe-mocaccino.png',
  },

  {
    id: 10,
    title: 'Chocolate Quente',
    tags: ['Especial', 'Com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: generateRandomPrice(),
    imageSrc: '/chocolate-quente.png',
  },

  {
    id: 11,
    title: 'Cubano',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: generateRandomPrice(),
    imageSrc: '/cafe-cubano.png',
  },

  {
    id: 12,
    title: 'Havaiano',
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: generateRandomPrice(),
    imageSrc: '/cafe-havaiano.png',
  },

  {
    id: 13,
    title: 'Árabe',
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: generateRandomPrice(),
    imageSrc: '/cafe-arabe.png',
  },

  {
    id: 14,
    title: 'Irlandês',
    tags: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: generateRandomPrice(),
    imageSrc: '/cafe-irlandes.png',
  },
];

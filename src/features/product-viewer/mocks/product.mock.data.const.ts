import { Product } from '../definitions'

export const MockProductCats: Product[] = [
  // 1 - 15
  {
    id: 1,
    name: 'Mino',
    description: 'A sweet kitten who loves sleeping in the sun.',
    price: 299,
    imageUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
  },
  {
    id: 2,
    name: 'Luna',
    description: 'A curious cat with big shining eyes.',
    price: 349,
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
  },
  {
    id: 3,
    name: 'Bibi',
    description: 'Small and cuddly, always looking for affection.',
    price: 259,
    imageUrl: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb',
  },
  {
    id: 4,
    name: 'Neko',
    description: 'An elegant cat with silky soft fur.',
    price: 399,
    imageUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
  },
  {
    id: 5,
    name: "GISMONDO IL CUSTODE DELLE CHIAVI MAGICHE DELL'UNIVERSO E DELL'APOCALISSE",
    description: 'The legendary cat guarding the magical keys of the universe and the apocalypse.',
    price: 1999,
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
  },
  {
    id: 6,
    name: 'Momo',
    description: 'Playful and cheerful, always bringing joy.',
    price: 279,
    imageUrl: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb',
  },
  {
    id: 7,
    name: 'Kiki',
    description: 'A calm cat who loves watching the rain.',
    price: 320,
    imageUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
  },
  {
    id: 8,
    name: 'Coco',
    description: 'Always curious and loves exploring corners.',
    price: 310,
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
  },
  {
    id: 9,
    name: 'Nina',
    description: 'Gentle and affectionate, the perfect companion.',
    price: 280,
    imageUrl: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb',
  },
  {
    id: 10,
    name: 'Pino',
    description: 'A fluffy little kitten with endless energy.',
    price: 299,
    imageUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
  },
  {
    id: 11,
    name: 'Zuzu',
    description: 'A playful explorer who climbs everything.',
    price: 330,
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
  },
  {
    id: 12,
    name: 'Lili',
    description: 'A quiet cat who loves cozy corners.',
    price: 295,
    imageUrl: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb',
  },
  {
    id: 13,
    name: "GIACOMINO, GUARDIANO DELLE GALASSIE E DELL'IPERSPAZIO",
    description: 'Small but mighty, guardian of galaxies and hyperspace.',
    price: 1499,
    imageUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
  },
  {
    id: 14,
    name: 'Oreo',
    description: 'Black and white kitten, always hungry for snacks.',
    price: 310,
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
  },
  {
    id: 15,
    name: 'Mila',
    description: 'Elegant and proud, with soft golden fur.',
    price: 350,
    imageUrl: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb',
  },

  ...Array.from({ length: 54 }, (_, i) => {
    const id = i + 16
    const randomName = `${Math.random().toString(36).substring(2, 7)}`
    return {
      id,
      name: `Random Cat ${randomName}`,
      description: `A unique cat is called ${randomName}, full of charm and personality.`,
      price: 250 + ((id * 37) % 1700),
      imageUrl: [
        'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
        'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb',
      ][id % 3],
    } as Product
  }),
]

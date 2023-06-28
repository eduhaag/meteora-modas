export interface Product {
  id: number
  title: string
  description: string
  price: string
  image: string
}

export const Products: Product[] = [
  {
    id: 1,
    title: 'Camiseta Conforto',
    description:
      'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
    price: 'R$ 70,00',
    image: '/src/assets/products/camiseta.jpg',
  },
  {
    id: 2,
    title: 'Calça Alfaiataria',
    description:
      'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
    price: 'R$ 180,00',
    image: '/src/assets/products/calca.jpg',
  },
  {
    id: 3,
    title: 'Tênis Chunky',
    description:
      'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
    price: 'R$ 250,00',
    image: '/src/assets/products/tenis.jpg',
  },
  {
    id: 4,
    title: 'Jaqueta Jeans',
    description:
      'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
    price: 'R$ 150,00',
    image: '/src/assets/products/jaquetas.jpg',
  },
  {
    id: 5,
    title: 'Óculos Redondo',
    description:
      'Armação metálica em grafite com lentes arredondadas. Sem erro!',
    price: 'R$ 120,00',
    image: '/src/assets/products/oculos.jpg',
  },
  {
    id: 5,
    title: 'Bolsa Coringa',
    description:
      'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
    price: 'R$ 120,00',
    image: '/src/assets/products/bolsa.jpg',
  },
]

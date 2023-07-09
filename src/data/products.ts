import CamisetaImage from '../assets/products/camiseta.jpg'
import CalcaImage from '../assets/products/calca.jpg'
import TenisImage from '../assets/products/tenis.jpg'
import JaquetaImage from '../assets/products/jaquetas.jpg'
import OculosImage from '../assets/products/oculos.jpg'
import BolsaImage from '../assets/products/bolsa.jpg'

export interface Product {
  id: number
  title: string
  description: string
  price: string
  image: string
  partner?: string
  colors?: {
    name: string
    hex: string
  }[]
  sizes?: string[]
}

export const Products: Product[] = [
  {
    id: 1,
    title: 'Camiseta Conforto',
    description:
      'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
    price: 'R$ 70,00',
    image: CamisetaImage,
    partner: 'Riachuelo',
    colors: [
      { name: 'Azul claro', hex: '#75D7F0' },
      { name: 'OffWhite', hex: '#F3F6F7' },
      { name: 'Preto', hex: '#000000' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
  },
  {
    id: 2,
    title: 'Calça Alfaiataria',
    description:
      'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
    price: 'R$ 180,00',
    image: CalcaImage,
    partner: 'C&A',
    colors: [
      { name: 'Azul claro', hex: '#75D7F0' },
      { name: 'OffWhite', hex: '#F3F6F7' },
      { name: 'Preto', hex: '#000000' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
  },
  {
    id: 3,
    title: 'Tênis Chunky',
    description:
      'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
    price: 'R$ 250,00',
    image: TenisImage,
    partner: 'Renner',
    colors: [
      { name: 'Azul claro', hex: '#75D7F0' },
      { name: 'OffWhite', hex: '#F3F6F7' },
      { name: 'Preto', hex: '#000000' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
  },
  {
    id: 4,
    title: 'Jaqueta Jeans',
    description:
      'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
    price: 'R$ 150,00',
    image: JaquetaImage,
    partner: 'Riachuelo',
    colors: [
      { name: 'Azul claro', hex: '#75D7F0' },
      { name: 'OffWhite', hex: '#F3F6F7' },
      { name: 'Preto', hex: '#000000' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
  },
  {
    id: 5,
    title: 'Óculos Redondo',
    description:
      'Armação metálica em grafite com lentes arredondadas. Sem erro!',
    price: 'R$ 120,00',
    image: OculosImage,
    partner: 'Renner',
    colors: [
      { name: 'Azul claro', hex: '#75D7F0' },
      { name: 'OffWhite', hex: '#F3F6F7' },
      { name: 'Preto', hex: '#000000' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
  },
  {
    id: 6,
    title: 'Bolsa Coringa',
    description:
      'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
    price: 'R$ 120,00',
    image: BolsaImage,
    partner: 'C&A',
    colors: [
      { name: 'Azul claro', hex: '#75D7F0' },
      { name: 'OffWhite', hex: '#F3F6F7' },
      { name: 'Preto', hex: '#000000' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
  },
]

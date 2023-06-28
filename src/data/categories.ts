import Camisetas from '../assets/categories/camisetas.png'
import Bolsas from '../assets/categories/bolsas.png'
import Calcados from '../assets/categories/calcados.png'
import Calcas from '../assets/categories/calcas.png'
import Casacos from '../assets/categories/casacos.png'
import Oculos from '../assets/categories/oculos.png'

export interface Categories {
  image: string
  title: string
  categoryUrl: string
}

export const categories: Categories[] = [
  {
    title: 'Camisetas',
    categoryUrl: '/',
    image: Camisetas,
  },
  {
    title: 'Bolsas',
    categoryUrl: '/',
    image: Bolsas,
  },
  {
    title: 'Calçados',
    categoryUrl: '/',
    image: Calcados,
  },
  {
    title: 'Calças',
    categoryUrl: '/',
    image: Calcas,
  },
  {
    title: 'Casacos',
    categoryUrl: '/',
    image: Casacos,
  },
  {
    title: 'Óculos',
    categoryUrl: '/',
    image: Oculos,
  },
]

import Banner1Desktop from '../assets/banners/desktop/1.png'
import Banner1Tablet from '../assets/banners/tablet/1.png'
import Banner1Mobile from '../assets/banners/mobile/1.png'

interface Banner {
  alt?: string
  desktop: string
  tablet: string
  mobile: string
}

export const Banners: Banner[] = [
  {
    desktop: Banner1Desktop,
    tablet: Banner1Tablet,
    mobile: Banner1Mobile,
  },
]

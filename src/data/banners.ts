import Banner1Desktop from '../assets/banners/desktop/1.png'
import Banner1Tablet from '../assets/banners/tablet/1.png'
import Banner1Mobile from '../assets/banners/mobile/1.png'

import Banner2Desktop from '../assets/banners/desktop/2.png'
import Banner2Tablet from '../assets/banners/tablet/2.png'
import Banner2Mobile from '../assets/banners/mobile/2.png'

import Banner3Desktop from '../assets/banners/desktop/3.png'
import Banner3Tablet from '../assets/banners/tablet/3.png'
import Banner3Mobile from '../assets/banners/mobile/3.png'

interface Banner {
  id: number
  image: string
  alt?: string
}

interface BannersInterface {
  desktop: Banner[]
  tablet: Banner[]
  mobile: Banner[]
}

export const Banners: BannersInterface = {
  desktop: [
    { id: 1, image: Banner1Desktop },
    { id: 2, image: Banner2Desktop },
    { id: 3, image: Banner3Desktop },
  ],
  tablet: [
    { id: 1, image: Banner1Tablet },
    { id: 2, image: Banner2Tablet },
    { id: 3, image: Banner3Tablet },
  ],
  mobile: [
    { id: 1, image: Banner1Mobile },
    { id: 2, image: Banner2Mobile },
    { id: 3, image: Banner3Mobile },
  ],
}

import { BannerContainer } from './styles'

import ArrowLeft from '../../../../assets/site/icon-arrow-left.svg'
import ArrowRight from '../../../../assets/site/icon-arrow-right.svg'
import { Banners } from '../../../../data/banners'
import { getDeviceType } from '../../../../utils/get-device-type'

export function Carousel() {
  const banner = Banners[0][getDeviceType()]

  return (
    <BannerContainer image={banner}>
      <div className="navigators">
        <button name="Banner anterior">
          <img src={ArrowLeft} alt="Icone de seta para a esquerda" />
        </button>
        <button name="Próximo banner">
          <img src={ArrowRight} alt="Icone de seta para a direita" />
        </button>
      </div>
    </BannerContainer>
  )
}

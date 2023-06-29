import { Carousel as Slider } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Banners } from '../../../../data/banners'
import { getDeviceType } from '../../../../utils/get-device-type'
import { Indicator, NavigateButton } from './styles'

import RightArrowIcon from '../../../../assets/site/icon-arrow-right.svg'
import LeftArrowIcon from '../../../../assets/site/icon-arrow-left.svg'

export function Carousel() {
  const banners = Banners[getDeviceType()]

  return (
    <Slider
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      renderArrowPrev={(onClickHandler) => LeftArrow(onClickHandler)}
      renderArrowNext={(onClickHandler) => RightArrow(onClickHandler)}
      renderIndicator={(onClickHandler, isSelected, index) =>
        NavIndicator(onClickHandler, isSelected, index)
      }
    >
      {banners.map((banner) => (
        <img key={banner.id} src={banner.image} alt={banner.alt} />
      ))}
    </Slider>
  )
}

function RightArrow(onClickHandler: () => void) {
  return (
    <NavigateButton onClick={onClickHandler} style={{ right: '2.69rem' }}>
      <img src={RightArrowIcon} alt="" />
    </NavigateButton>
  )
}

function LeftArrow(onClickHandler: () => void) {
  return (
    <NavigateButton onClick={onClickHandler} style={{ left: '2.69rem' }}>
      <img src={LeftArrowIcon} alt="" />
    </NavigateButton>
  )
}

function NavIndicator(clickHandler: any, isSelected: boolean, index: number) {
  if (isSelected) {
    return (
      <Indicator
        style={{ opacity: 0.5 }}
        value={index}
        key={index}
        role="button"
        title={'Banner' + (index + 1)}
      />
    )
  }

  return (
    <Indicator
      onClick={clickHandler}
      value={index}
      key={index}
      role="button"
      title={'Banner' + (index + 1)}
    />
  )
}

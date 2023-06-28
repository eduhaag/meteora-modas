import styled from 'styled-components'
import { mediaQueries } from '../../../../styles/themes/media-queries'

export const BannerContainer = styled.div`
  height: 25.937rem;
  background: url('/src/assets/site/banners/mobile/1.png') no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 0 2.812rem 1.625rem;

  .navigators {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (min-width: ${mediaQueries.TABLET}) {
    background-image: url('/src/assets/site/banners/tablet/1.png');
  }

  @media (min-width: ${mediaQueries.DESKTOP}) {
    background-image: url('/src/assets/site/banners/desktop/1.png');
  }
`

import styled from 'styled-components'
import { mediaQueries } from '../../../../styles/themes/media-queries'

export const CardContainer = styled.div`
  width: 9.125rem;

  a {
    text-decoration: none;
  }

  @media (min-width: ${mediaQueries.TABLET}) {
    width: 13.18rem;
  }

  @media (min-width: ${mediaQueries.DESKTOP}) {
    width: 10rem;
  }
`
export const ImageContainer = styled.div`
  height: 9.812rem;
  background-color: ${(props) => props.theme.yellow};
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
`

export const TitleContainer = styled.div`
  background-color: ${(props) => props.theme.black};
  padding: 0.5rem 1rem;

  h3 {
    color: ${(props) => props.theme.white};
    font-weight: 500;
  }
`

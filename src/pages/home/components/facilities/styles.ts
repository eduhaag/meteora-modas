import styled from 'styled-components'
import { mediaQueries } from '../../../../styles/themes/media-queries'

export const FacilitiesContainer = styled.section`
  background-color: ${(props) => props.theme.black};
  padding: 2.125rem 1.687rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${(props) => props.theme.white};
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .facilities-list {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: ${mediaQueries.DESKTOP}) {
      flex-direction: row;
    }
  }
`

export const FacilityCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  h3 {
    color: ${(props) => props.theme.yellow};
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  span {
    display: block;
    color: ${(props) => props.theme.white};
    width: 12.5rem;
    font-size: 0.812rem;
  }
`

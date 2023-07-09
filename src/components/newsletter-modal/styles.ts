import styled from 'styled-components'
import { mediaQueries } from '../../styles/themes/media-queries'

export const ModalHeader = styled.header`
  background-color: ${(props) => props.theme.black};
  width: 100%;
  padding: 0.625rem 1.75rem 0.625rem 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => props.theme.white};
  border-radius: 4px 4px 0 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  right: 0;
`

export const ContentContainer = styled.div`
  padding: 1rem;

  img {
    width: 100%;
  }

  @media (min-width: ${mediaQueries.DESKTOP}) {
    display: flex;
    padding-bottom: 2rem;

    img {
      max-width: 22.12rem;
      max-height: 29.62rem;
    }
  }
`

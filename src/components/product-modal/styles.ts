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

export const ProductInfoContainer = styled.div`
  padding: 1.5rem 1rem 0.5rem;
  margin-top: -0.25rem;
  border: 1px solid ${(props) => props.theme['gray-100']};
  border-top: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${mediaQueries.DESKTOP}) {
    border: 0;
    padding-top: 0;
    margin-top: 0;
  }
`

export const ProductInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h3 {
    font-size: 1rem;
    font-weight: bold;
  }

  p {
    font-size: 0.85rem;
    line-height: 1.25rem;
  }

  hr {
    border-color: ${(props) => props.theme.black};
  }

  strong {
    font-size: 1.25rem;
    font-weight: 500;
  }

  small {
    font-size: 0.812rem;
    color: ${(props) => props.theme['gray-300']};
  }
`

export const OptionsGroup = styled.div`
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme['gray-100']};

  &:not(:first-child) {
    margin-top: 1rem;
  }

  strong {
    font-size: 0.812rem;
    font-weight: 700;
  }

  fieldset {
    border: 0;
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    &:last-child {
      margin-bottom: 1rem;
    }
  }
`

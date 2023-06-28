import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  width: 20rem;
  border: 1px solid ${(props) => props.theme['gray-100']};

  img {
    width: 100%;
    height: 26.37rem;
  }
`

export const ProductInformations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;

  h1 {
    font-size: 1rem;
    font-weight: 700;
  }

  span {
    font-size: 0.812rem;
    line-height: 1.25rem;
    text-align: start;
    height: 3rem;
  }

  strong {
    font-weight: 700;
  }
`

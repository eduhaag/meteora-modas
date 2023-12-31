import styled from 'styled-components'

export const ProductsContainer = styled.section`
  margin-top: 3.13rem;

  h2 {
    color: ${(props) => props.theme['gray-500']};
    font-size: 1.75rem;
    font-weight: 500;
  }

  span.error {
    display: block;
    font-size: 1.5rem;
    margin-top: 2rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const ProductList = styled.div`
  margin-top: 1.87rem;
  display: flex;
  justify-content: center;
  gap: 1.875rem;
  flex-wrap: wrap;
`

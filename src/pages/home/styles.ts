import styled from 'styled-components'

export const MainContainer = styled.main`
  padding: 0.5rem 0;
  margin: 1.5rem;
  text-align: center;
`

export const CategorySection = styled.section`
  h2 {
    font-size: 1.75rem;
    font-weight: 500;
    color: ${(props) => props.theme['gray-500']};
  }

  .category-list {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem 1.88rem;

    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`

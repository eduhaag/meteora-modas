import { NavLink } from 'react-router-dom'
import { CardContainer, ImageContainer, TitleContainer } from './styles'
import { Category } from '../..'
import { useContext } from 'react'
import { ProductsContext } from '../../../../contexts/products'

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  const { filterByCategory } = useContext(ProductsContext)

  const handleCategoryFilter = () => {
    filterByCategory(category.id)
  }

  return (
    <CardContainer>
      <NavLink to="" onClick={handleCategoryFilter}>
        <ImageContainer>
          <img
            src={`${
              import.meta.env.VITE_REACT_API_URL
            }/assets/images/categories/${category.image}`}
            alt={category.title}
          />
        </ImageContainer>
        <TitleContainer>
          <h3>{category.title}</h3>
        </TitleContainer>
      </NavLink>
    </CardContainer>
  )
}

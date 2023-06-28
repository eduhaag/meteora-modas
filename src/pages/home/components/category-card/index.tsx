import { NavLink } from 'react-router-dom'
import { CardContainer, ImageContainer, TitleContainer } from './styles'

interface CategoryCardProps {
  title: string
  image: string
  url: string
}

export function CategoryCard(props: CategoryCardProps) {
  return (
    <CardContainer>
      <NavLink to={props.url}>
        <ImageContainer>
          <img src={props.image} alt={props.title} />
        </ImageContainer>
        <TitleContainer>
          <h3>{props.title}</h3>
        </TitleContainer>
      </NavLink>
    </CardContainer>
  )
}

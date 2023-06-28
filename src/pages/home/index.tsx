import { categories } from '../../data/categories'
import { Carousel } from './components/carousel'
import { CategoryCard } from './components/category-card'
import { FacilitiesSection } from './components/facilities'
import { ProductsSection } from './components/products-section'
import { CategorySection, MainContainer } from './styles'

export function Home() {
  return (
    <>
      <Carousel />
      <MainContainer>
        <CategorySection>
          <h2>Busque por categoria:</h2>
          <div className="category-list">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                image={`/src/assets/site/categories/${category.imageName}`}
                title={category.title}
                url={category.categoryUrl}
              />
            ))}
          </div>
        </CategorySection>
        <ProductsSection />
      </MainContainer>
      <FacilitiesSection />
    </>
  )
}

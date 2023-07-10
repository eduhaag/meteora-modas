import { useEffect, useState } from 'react'
import { Carousel } from './components/carousel'
import { CategoryCard } from './components/category-card'
import { FacilitiesSection } from './components/facilities'
import { NewsLetterSection } from './components/newsletter-section'
import { ProductsSection } from './components/products-section'
import { CategorySection, MainContainer } from './styles'
import { api } from '../../lib/axios'

export interface Category {
  id: number
  image: string
  title: string
  categoryUrl: string
}

export function Home() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    api
      .get('/categories')
      .then((response) => {
        setCategories(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Carousel />
      <MainContainer>
        <CategorySection>
          <h2>Busque por categoria:</h2>
          <div className="category-list">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </CategorySection>
        <ProductsSection />
      </MainContainer>
      <FacilitiesSection />
      <NewsLetterSection />
    </>
  )
}

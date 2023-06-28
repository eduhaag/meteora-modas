import { Products } from '../../../../data/products'
import { ProductCard } from '../product-card'
import { ProductList, ProductsContainer } from './styles'

export function ProductsSection() {
  return (
    <ProductsContainer>
      <h2>Produtos que estão Bombando</h2>
      <ProductList>
        {Products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </ProductsContainer>
  )
}

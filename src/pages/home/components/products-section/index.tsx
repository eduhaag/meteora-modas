import { useContext } from 'react'
import { ProductCard } from '../product-card'
import { ProductList, ProductsContainer } from './styles'
import { ProductsContext } from '../../../../contexts/products'

export function ProductsSection() {
  const { products } = useContext(ProductsContext)

  return (
    <ProductsContainer>
      {products.length > 0 ? (
        <>
          <h2>Produtos que estão Bombando</h2>
          <ProductList>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductList>
        </>
      ) : (
        <span className="error">Não encontramos os produtos desejados. :/</span>
      )}
    </ProductsContainer>
  )
}

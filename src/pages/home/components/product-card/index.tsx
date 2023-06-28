import { ProductCardContainer, ProductInformations } from './styles'

import { Button } from '../../../../components/button'
import { Product } from '../../../../data/products'

interface ProductCartProps {
  product: Product
}

export function ProductCard({ product }: ProductCartProps) {
  return (
    <ProductCardContainer>
      <img src={product.image} alt={`Foto do produto ${product.title}`} />
      <ProductInformations>
        <h3>{product.title}</h3>
        <span>{product.description}</span>
        <strong>{product.price}</strong>
        <Button>Ver mais</Button>
      </ProductInformations>
    </ProductCardContainer>
  )
}

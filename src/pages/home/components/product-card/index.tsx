import { ProductCardContainer, ProductInformations } from './styles'

import { Product } from '../../../../data/products'
import { ProductModal } from '../../../../components/product-modal'
import { Button } from '../../../../components/button/styles'
import { useState } from 'react'

interface ProductCartProps {
  product: Product
}

export function ProductCard({ product }: ProductCartProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <ProductCardContainer>
      <img src={product.image} alt={`Foto do produto ${product.title}`} />
      <ProductInformations>
        <h3>{product.title}</h3>
        <span>{product.description}</span>
        <strong>{product.price}</strong>
        <Button
          onClick={() => {
            setIsModalOpen(!isModalOpen)
          }}
        >
          Ver mais
        </Button>
        <ProductModal
          isModalOpen={isModalOpen}
          product={product}
          closeModal={() => {
            setIsModalOpen(!isModalOpen)
          }}
        ></ProductModal>
      </ProductInformations>
    </ProductCardContainer>
  )
}

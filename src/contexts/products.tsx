import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface Product {
  id: number
  title: string
  description: string
  price: string
  image: string
  partner?: string
  colors?: {
    name: string
    hex: string
  }[]
  sizes?: string[]
}

interface ProductsContextProviderProps {
  children: ReactNode
}

interface ProductsContextType {
  products: Product[]
  filterByCategory: (categoryId: number) => void
  filterByProductTitle: (query: string) => void
}

export const ProductsContext = createContext({} as ProductsContextType)

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    api
      .get('/products')
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const filterByCategory = async (categoryId: number) => {
    api
      .get('/products', { params: { categoryId } })
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const filterByProductTitle = (query: string) => {
    api
      .get('/products', { params: { q: query } })
      .then((respose) => {
        setProducts(respose.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <ProductsContext.Provider
      value={{ products, filterByCategory, filterByProductTitle }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

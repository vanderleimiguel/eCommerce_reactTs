import { Product } from '../types/product.type'
import { productList } from '../../mocks/productList'
import axios from 'axios'

axios.create({
  baseURL: 'http://localhost',
  headers: { 'Content-Type': 'application/json' }
})

export const api = {
  getProducts: async (): Promise<Product[] | undefined> => {
    // return productList
    try {
      const products = await axios.get('/product')
      return products.data
    } catch (err: any) {
      alert('Erro no servidor')
    }
  },
  createProduct: async (product: Product): Promise<Product | undefined> => {
    // productList.push(product)
    try {
      const newProduct = await axios.post('/product/create', product)
      return newProduct.data
    } catch (err: any) {
      alert('Erro ao criar o produto')
    }
  }
}

import { FormEvent, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { productList } from '../../mocks/productList'
import { ProductInput } from '../../utils/types/product.type'
import { ContentDiv } from './styles'
import { api } from '../../utils/api/api'

export function CreateProduct() {
  const navigate = useNavigate()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const newProduct: ProductInput = {
      name: e.currentTarget.productName.value,
      description: e.currentTarget.productDescription.value,
      price: parseFloat(e.currentTarget.productPrice.value),
      imageUrl: e.currentTarget.productImage.value
    }

    const product = await api.createProduct(newProduct)

    if (product) {
      navigate('/')
    }
  }

  return (
    <ContentDiv>
      <h2>Cadastro de Produtos</h2>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input type="text" name="productName" required></input>
        <label>Product Description</label>
        <input type="text" name="productDescription" required></input>
        <label>Product Price</label>
        <input type="number" step="0.01" name="productPrice" required></input>
        <label>Product Image</label>
        <input type="text" name="productImage" required></input>
        <button type="submit">Enviar</button>
      </form>
    </ContentDiv>
  )
}

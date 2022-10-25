import { Product } from "../../utils/types/product.type"

// definido pegar essas variaveis que estão tipadas no product
export function Card({description, id, imageUrl, name, price}: Product) {
  return (
    <div>Card</div>
  )
}

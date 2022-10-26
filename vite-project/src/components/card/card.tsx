import { Product } from "../../utils/types/product.type"
import { CardSection } from "./styles"

// definido pegar essas variaveis que estão tipadas no product
export function Card({description, id, imageUrl, name, price}: Product) {
  return (
    <CardSection>
      <img src={imageUrl} alt={name}/>
      <h2>{name}</h2>
      <span>{price}</span>
      <h3>{description}</h3>
    </CardSection>
  )
}

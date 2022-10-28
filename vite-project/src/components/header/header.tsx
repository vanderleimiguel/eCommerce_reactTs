import {
  HeaderComponent,
  HeaderLogo,
  HeaderSearch,
  HeaderButtons
} from './styles'
import { Link, useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  return (
    <HeaderComponent>
      <HeaderLogo>
        <Link to="/">
          <h1>Tabajara</h1>
          <img
            src="./public/comprar.png"
            alt="logo"
            height="30px"
            width="30px"
          />
        </Link>
      </HeaderLogo>
      <HeaderSearch>
        <input type="text" placeholder="Search Product" />
      </HeaderSearch>
      <HeaderButtons>
        <div>
          <button
            onClick={() => {
              navigate('/create')
            }}
          >
            Cadastro de Produto
          </button>
          <button>Carrinho</button>
          <button>Logout</button>
        </div>
      </HeaderButtons>
    </HeaderComponent>
  )
}

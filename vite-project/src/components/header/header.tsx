import {
  HeaderComponent,
  HeaderLogo,
  HeaderSearch,
  HeaderButtons
} from './styles'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderComponent>
      <HeaderLogo>
        <Link to="/">
          <h1>Tabajara</h1>
          <img src="" alt="logo" />
        </Link>
      </HeaderLogo>
      <HeaderSearch>
        <input type="text" placeholder="Search Product" />
      </HeaderSearch>
      <HeaderButtons>
        <div>
          <button>Carrinho</button>
          <button>Logout</button>
        </div>
      </HeaderButtons>
    </HeaderComponent>
  )
}

import {
  HeaderComponent,
  HeaderLogo,
  HeaderSearch,
  HeaderButtons
} from './styles'

export function Header() {
  return (
    <HeaderComponent>
      <HeaderLogo>
        <h1>Tabajara</h1>
        <img src="" alt="logo" />
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

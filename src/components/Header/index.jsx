import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../logo.svg'

const HomeLogo = styled.img`
  height: 68px;
  width: 210.32px;
  position: absolute;
  left: 0%;
  right: 83.04%;
  top: 0%;
  bottom: 0%;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={Logo} />
      </Link>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </div>
    </NavContainer>
  )
}

export default Header

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoWhite from '../../assets/logo-white.svg'

const FooterLogo = styled.img`
  height: 39.44px;
`

const FooterContainer = styled.nav`
  height: 209px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
`

function Footer() {
  return (
    <FooterContainer>
      <Link to="/">
        <FooterLogo src={LogoWhite} />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterContainer>
  )
}

export default Footer

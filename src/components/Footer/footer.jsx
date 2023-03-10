import { Link } from 'react-router-dom'
import LogoWhite from '../../assets/logo_white.svg'
import './footer.module.scss'

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={LogoWhite} alt="Logo" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer

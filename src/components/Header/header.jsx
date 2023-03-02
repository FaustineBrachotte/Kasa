import { Link } from 'react-router-dom'
import './header.module.scss'
import Logo from '../../logo.svg'

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo" />
      </Link>
      <div className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </div>
    </header>
  )
}

export default Header

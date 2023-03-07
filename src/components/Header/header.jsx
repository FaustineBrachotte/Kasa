import { Link } from 'react-router-dom'
import style from './header.module.scss'
import Logo from '../../logo.svg'

function Header() {
  return (
    <header className={style.header}>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className={style.header__nav}>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </div>
    </header>
  )
}

export default Header

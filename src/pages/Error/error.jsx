import { Link } from 'react-router-dom'
import style from './error.module.scss'

function Error() {
  return (
    <div className={style.error}>
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to={`/`}>Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Error

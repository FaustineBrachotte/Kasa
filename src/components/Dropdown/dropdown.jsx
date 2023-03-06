import { useState } from 'react'
import ArrowDown from '../../assets/arrow_down.svg'
import ArrowUp from '../../assets/arrow_up.svg'
import style from './dropdown.module.scss'

function Dropdown({ title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <>
      <li className={style.dropdown} onClick={() => setIsOpen(false)}>
        <p className={style.title}>{title}</p>
        <img src={ArrowUp} className={style.arrow} alt="Fermer" />
        <div className={style.description}>{description}</div>
      </li>
    </>
  ) : (
    <>
      <li className={style.dropdown} onClick={() => setIsOpen(true)}>
        <p className={style.title}>{title}</p>
        <img src={ArrowDown} className={style.arrow} alt="Ouvrir" />
      </li>
    </>
  )
}

export default Dropdown

import { useState } from 'react'
import ArrowDown from '../../assets/arrow_down.svg'
import ArrowUp from '../../assets/arrow_up.svg'
import style from './dropdown.module.scss'

function Dropdown({ title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <>
      <li className={style.dropdown} onClick={() => setIsOpen(false)}>
        <p className={style.dropdown__title}>{title}</p>
        <img className={style.dropdown__arrow} src={ArrowUp} alt="Fermer" />
        <div className={style.dropdown__description}>{description}</div>
      </li>
    </>
  ) : (
    <>
      <li className={style.dropdown} onClick={() => setIsOpen(true)}>
        <p className={style.dropdown__title}>{title}</p>
        <img className={style.dropdown__arrow} src={ArrowDown} alt="Ouvrir" />
      </li>
    </>
  )
}

export default Dropdown

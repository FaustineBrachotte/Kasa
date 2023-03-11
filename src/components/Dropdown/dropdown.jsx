import { useState } from 'react'
import ArrowDown from '../../assets/arrow_down.svg'
import ArrowUp from '../../assets/arrow_up.svg'
import style from './dropdown.module.scss'

function Dropdown({ parentClass, title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <>
      <div
        className={`${style.dropdown} ${parentClass}`}
        onClick={() => setIsOpen(false)}
      >
        <h2>{title}</h2>
        <img src={ArrowUp} alt="Fermer" />
        <div className={`${style.dropdown__description} ${parentClass}`}>
          {description}
        </div>
      </div>
    </>
  ) : (
    <>
      <div
        className={`${style.dropdown} ${parentClass}`}
        onClick={() => setIsOpen(true)}
      >
        <h2>{title}</h2>
        <img src={ArrowDown} alt="Ouvrir" />
      </div>
    </>
  )
}

export default Dropdown

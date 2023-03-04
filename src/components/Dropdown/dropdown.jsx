import { useState } from 'react'
import ArrowDown from '../../assets/arrow_down.svg'
import ArrowUp from '../../assets/arrow_up.svg'
import './dropdown.module.scss'

function Dropdown({ title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <>
      <li className="dropdown" onClick={() => setIsOpen(false)}>
        <p className="title">{title}</p>
        <img src={ArrowUp} className="arrow" alt="Fermer" />
      </li>

      <p className="description">{description}</p>
    </>
  ) : (
    <>
      <li className="dropdown" onClick={() => setIsOpen(true)}>
        <p className="title">{title}</p>
        <img src={ArrowDown} className="arrow" alt="Ouvrir" />
      </li>
    </>
  )
}

export default Dropdown

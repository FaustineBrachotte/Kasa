import { useState } from 'react'
import './dropdown.module.scss'

function Dropdown({ title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <>
      <li onClick={() => setIsOpen(false)}>{title}</li>
      <p>{description}</p>
    </>
  ) : (
    <li onClick={() => setIsOpen(true)}>{title}</li>
  )
}

export default Dropdown

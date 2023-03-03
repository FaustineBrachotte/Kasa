import { useState } from 'react'
import './dropdown.module.scss'

function Dropdown(title, description) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="drop">
      <button onClick={() => setIsOpen(false)}>{title}</button>
      <p>{description}</p>
    </div>
  ) : (
    <button onClick={() => setIsOpen(true)}>{title}</button>
  )
}

export default Dropdown

import './card.css'

function Card({ cover, title }) {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Card

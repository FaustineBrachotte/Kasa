import style from './card.module.scss'

function Card({ cover, title }) {
  return (
    <div className={style.card}>
      <h1>{title}</h1>
      <img src={cover} alt={title} />
      <div className={style.card__background}></div>
    </div>
  )
}

export default Card

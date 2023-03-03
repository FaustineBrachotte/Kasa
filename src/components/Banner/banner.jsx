import './banner.module.scss'

function Card({ src }) {
  return (
    <div className="banner">
      <img src={src} alt="" />
      <div className="background"></div>
    </div>
  )
}

export default Card

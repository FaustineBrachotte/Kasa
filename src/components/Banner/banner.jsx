import './banner.module.scss'

function Banner({ src, title }) {
  return (
    <div className="banner">
      <p>{title}</p>
      <img src={src} alt="" />
      <div className="background"></div>
    </div>
  )
}

export default Banner

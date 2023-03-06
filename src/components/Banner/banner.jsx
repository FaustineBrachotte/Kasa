import './banner.module.scss'

function Banner({ src, title }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <img src={src} alt="" />
      <div className="background"></div>
    </div>
  )
}

export default Banner

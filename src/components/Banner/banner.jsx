import style from './banner.module.scss'

function Banner({ src, title }) {
  return (
    <div className={style.banner}>
      <h1>{title}</h1>
      <img src={src} alt="" />
      <div className={style.banner__background}></div>
    </div>
  )
}

export default Banner

import style from './banner.module.scss'

function Banner({ parentClass, src, title }) {
  return (
    <div className={`${style.banner} ${parentClass}`}>
      <h1>{title}</h1>
      <img src={src} alt="" />
      <div className={style.banner__background}></div>
    </div>
  )
}

export default Banner

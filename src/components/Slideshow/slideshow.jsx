import { useState } from 'react'
import ArrowLeft from '../../assets/arrow_left.svg'
import ArrowRight from '../../assets/arrow_right.svg'
import style from './slideshow.module.scss'

function Slideshow({ pictures }) {
  const [pictureNumber, updatePicture] = useState(0)
  const numberOfPic = pictures.length

  const prevPicture = () => {
    pictureNumber === 0
      ? updatePicture(numberOfPic - 1)
      : updatePicture(pictureNumber - 1)
  }
  const nextPicture = () => {
    pictureNumber === pictures.length - 1
      ? updatePicture(0)
      : updatePicture(pictureNumber + 1)
  }

  return numberOfPic > 1 ? (
    <>
      <div className={style.slideshow}>
        <img
          src={ArrowLeft}
          className={`${style.slideshow__arrow} ${style.slideshow__arrow__left}`}
          alt="Précédent"
          onClick={prevPicture}
        />
        <img
          className={style.slideshow__picture}
          src={pictures[pictureNumber]}
          alt="Logement"
        />
        <img
          src={ArrowRight}
          className={`${style.slideshow__arrow} ${style.slideshow__arrow__right}`}
          alt="Suivant"
          onClick={nextPicture}
        />
      </div>
    </>
  ) : (
    <>
      <div className={style.slideshow}>
        <img
          className={style.slideshow__picture}
          src={pictures[pictureNumber]}
          alt="Logement"
        />
      </div>
    </>
  )
}

export default Slideshow

import { useState } from 'react'
import ArrowLeft from '../../assets/arrow_left.svg'
import ArrowRight from '../../assets/arrow_right.svg'
import style from './slideshow.module.scss'

function Slideshow({ pictures }) {
  const [pictureNumber, updatePicture] = useState(0)
  const numberOfPic = pictures.length
  const displayedPicNumber = pictureNumber + 1

  // Calcul de l'index de l'image précédente
  function prevPicture() {
    pictureNumber === 0
      ? updatePicture(numberOfPic - 1)
      : updatePicture(pictureNumber - 1)
  }

  // Calcul de l'index de l'image suivante
  function nextPicture() {
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
        <p>
          {displayedPicNumber} / {numberOfPic}
        </p>
        <img
          src={ArrowRight}
          className={`${style.slideshow__arrow} ${style.slideshow__arrow__right}`}
          alt="Suivant"
          onClick={nextPicture}
        />
      </div>
    </>
  ) : (
    // N'affiche pas les flèches si l'image est unique
    <>
      <div className={style.slideshow}>
        <img
          className={style.slideshow__picture}
          src={pictures[pictureNumber]}
          alt="Logement"
        />
        <p>
          {displayedPicNumber} / {numberOfPic}
        </p>
      </div>
    </>
  )
}

export default Slideshow

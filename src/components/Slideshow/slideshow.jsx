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
      <div className="slideshow">
        <img
          src={ArrowLeft}
          className={`${style.arrow} ${style.left}`}
          alt="Précédent"
          onClick={prevPicture}
        />
        <img className="picture" src={pictures[pictureNumber]} alt="Logement" />
        <img
          src={ArrowRight}
          className={`${style.arrow} ${style.right}`}
          alt="Suivant"
          onClick={nextPicture}
        />
      </div>
    </>
  ) : (
    <>
      <div className="slideshow">
        <img className="picture" src={pictures[pictureNumber]} alt="Logement" />
      </div>
    </>
  )
}

export default Slideshow

import { useState } from 'react'
import ArrowLeft from '../../assets/arrow_left.svg'
import ArrowRight from '../../assets/arrow_right.svg'
import './slideshow.module.scss'

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

  return (
    <>
      <div className="slideshow">
        <img
          src={ArrowLeft}
          className="arrow left"
          alt="Précédent"
          onClick={prevPicture}
        />
        <img className="picture" src={pictures[pictureNumber]} alt="Logement" />
        <img
          src={ArrowRight}
          className="arrow right"
          alt="Suivant"
          onClick={nextPicture}
        />
      </div>
    </>
  )
}

export default Slideshow

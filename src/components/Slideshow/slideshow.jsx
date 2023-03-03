import { useState } from 'react'
import ArrowLeft from '../../assets/arrow_left.svg'
import ArrowRight from '../../assets/arrow_right.svg'
import './slideshow.scss'

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
      <p>{numberOfPic}</p>
      <div className="slideshow">
        <img src={ArrowLeft} alt="Précédent" onClick={prevPicture} />
        <img src={pictures[pictureNumber]} alt="Logement" />
        <img src={ArrowRight} alt="Suivant" onClick={nextPicture} />
      </div>
    </>
  )
}

export default Slideshow

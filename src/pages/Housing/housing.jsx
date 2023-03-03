import { useParams } from 'react-router-dom'
import HousingList from '../../data/housing.json'
import Slideshow from '../../components/Slideshow/slideshow'

function Housing() {
  const productId = useParams()
  const housing = HousingList.find((housing) => housing.id === productId.id)

  return (
    <>
      <h1>{housing.title}</h1>
      <Slideshow pictures={housing.pictures} />
    </>
  )
}

export default Housing

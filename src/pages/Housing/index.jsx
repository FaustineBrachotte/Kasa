import { useParams } from 'react-router-dom'
import HousingList from '../../data/data.json'

function Housing() {
  const productId = useParams()
  const Housing = HousingList.find((housing) => housing.id === productId.id)

  return <h1>{Housing.title}</h1>
}

export default Housing

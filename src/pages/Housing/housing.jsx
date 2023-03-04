import { useParams } from 'react-router-dom'
import HousingList from '../../data/housing.json'
import Slideshow from '../../components/Slideshow/slideshow'
import Dropdown from '../../components/Dropdown/dropdown'
import './housing.module.scss'

function Housing() {
  const productId = useParams()
  const housing = HousingList.find((housing) => housing.id === productId.id)

  function equipments() {
    return (
      <ul className="equipments">
        {housing.equipments.map((equipment) => (
          <li>{equipment}</li>
        ))}
      </ul>
    )
  }

  return (
    <div className="housingPage">
      <Slideshow pictures={housing.pictures} />
      <h1>{housing.title}</h1>
      <p>{housing.location}</p>
      <ul className="tags">
        {housing.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
      <p>{housing.host.name}</p>
      <img src={housing.host.picture} alt="Hôte" />
      <p>{housing.rating}</p>
      <Dropdown title="Description" description={housing.description} />
      <Dropdown title="Équipements" description={equipments()} />
    </div>
  )
}

export default Housing

import { useParams, Navigate } from 'react-router-dom'
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
          <li key={equipment}>{equipment}</li>
        ))}
      </ul>
    )
  }

  return housing ? (
    <div className="housingPage">
      <Slideshow pictures={housing.pictures} />
      <div className="heading">
        <div className="heading__left">
          <h1>{housing.title}</h1>
          <p>{housing.location}</p>
          <ul className="tags">
            {housing.tags.map((tag) => (
              <li key={tag} className="tag">
                <p>{tag}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="heading__right">
          <div className="host">
            <p>{housing.host.name}</p>
            <img src={housing.host.picture} alt="Hôte" />
          </div>
          <p>{housing.rating}</p>
        </div>
      </div>
      <div className="dropdowns">
        <Dropdown title="Description" description={housing.description} />
        <Dropdown title="Équipements" description={equipments()} />
      </div>
    </div>
  ) : (
    <Navigate to="/error" replace={true} />
  )
}

export default Housing

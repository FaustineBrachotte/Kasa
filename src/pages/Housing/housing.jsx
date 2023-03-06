import { useParams, Navigate } from 'react-router-dom'
import HousingList from '../../data/housing.json'
import Slideshow from '../../components/Slideshow/slideshow'
import Dropdown from '../../components/Dropdown/dropdown'
import './housing.module.scss'
import ActiveStar from '../../assets/star-orange.svg'
import GreyStar from '../../assets/star-grey.svg'

function Housing() {
  const productId = useParams()
  const housing = HousingList.find((housing) => housing.id === productId.id)

  function stars() {
    const activeStarsNumber = housing.rating
    const greyStarsNumber = 5 - activeStarsNumber
    let activeStars = []
    let greyStars = []
    for (let i = 1; i <= activeStarsNumber; i++) {
      activeStars.push(<img src={ActiveStar} alt="Étoile colorée" />)
    }
    for (let i = 1; i <= greyStarsNumber; i++) {
      greyStars.push(<img src={GreyStar} alt="Étoile grisée" />)
    }
    return (
      <div className="stars">
        <div>{activeStars}</div>
        <div>{greyStars}</div>
      </div>
    )
  }

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
          <div>{stars()}</div>
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

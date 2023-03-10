import { useParams, Navigate } from 'react-router-dom'
import HousingList from '../../data/housing.json'
import Slideshow from '../../components/Slideshow/slideshow'
import Dropdown from '../../components/Dropdown/dropdown'
import ActiveStar from '../../assets/star_orange.svg'
import GreyStar from '../../assets/star_grey.svg'
import style from './housing.module.scss'

function Housing() {
  const productId = useParams()
  const housing = HousingList.find((housing) => housing.id === productId.id)

  // Transforme la valeur de rating en étoiles
  function stars() {
    const activeStarsNumber = housing.rating
    const greyStarsNumber = 5 - activeStarsNumber
    let activeStars = []
    let greyStars = []
    for (let i = 1; i <= activeStarsNumber; i++) {
      activeStars.push(<img key={i} src={ActiveStar} alt="Étoile colorée" />)
    }
    for (let i = 1; i <= greyStarsNumber; i++) {
      greyStars.push(<img key={i} src={GreyStar} alt="Étoile grisée" />)
    }
    return (
      <div className={style.subheading__stars}>
        <div>{activeStars}</div>
        <div>{greyStars}</div>
      </div>
    )
  }

  // Récupère la liste des équipements
  function equipments() {
    return (
      <ul className={style.dropdowns__dropdown__equipments}>
        {housing.equipments.map((equipment) => (
          <li key={equipment}>{equipment}</li>
        ))}
      </ul>
    )
  }

  return housing ? (
    <div className={style.page}>
      <Slideshow pictures={housing.pictures} />
      <div className={style.heading}>
        <div>
          <h1>{housing.title}</h1>
          <p>{housing.location}</p>
          <ul className={style.heading__tags}>
            {housing.tags.map((tag) => (
              <li key={tag} className={style.heading__tags__tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className={style.subheading}>
          <div className={style.subheading__host}>
            <p>{housing.host.name}</p>
            <img src={housing.host.picture} alt="Hôte" />
          </div>
          <div>{stars()}</div>
        </div>
      </div>
      <div className={style.dropdowns}>
        <div className={style.dropdowns__dropdown}>
          <Dropdown
            title="Description"
            description={housing.description}
            parentClass="housing"
          />
        </div>
        <div className={style.dropdowns__dropdown}>
          <Dropdown
            title="Équipements"
            description={equipments()}
            parentClass="housing"
          />
        </div>
      </div>
    </div>
  ) : (
    // Redirection vers la page d'erreur si l'identifiant du logement n'exite pas
    <Navigate to="/error" replace={true} />
  )
}

export default Housing

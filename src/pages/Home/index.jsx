import { Link } from 'react-router-dom'
import HousingList from '../../data/data.json'

function Home() {
  return (
    <>
      <h1>Chez vous, partout et ailleurs</h1>
      <ul className="housingList">
        {HousingList.map((housing) => (
          <Link to={`/housing/${housing.id}`}>
            {housing.title}
            <p></p>
          </Link>
        ))}
      </ul>
    </>
  )
}

export default Home

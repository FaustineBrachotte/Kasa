import { Link } from 'react-router-dom'
import Card from '../../components/Card/card'
import HousingList from '../../data/data.json'
import './home.css'

function Home() {
  return (
    <>
      <h1>Chez vous, partout et ailleurs</h1>
      <section className="cards-section">
        {HousingList.map((housing) => (
          <article key={housing.id}>
            <Link to={`/housing/${housing.id}`}>
              <Card cover={housing.cover} title={housing.title} />
            </Link>
          </article>
        ))}
      </section>
    </>
  )
}

export default Home

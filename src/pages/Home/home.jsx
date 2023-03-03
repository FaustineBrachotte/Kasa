import { Link } from 'react-router-dom'
import Card from '../../components/Card/card'
import Banner from '../../components/Banner/banner'
import HousingList from '../../data/housing.json'
import HomeBanner from '../../assets/home_banner.png'

import './home.css'

function Home() {
  return (
    <>
      <Banner src={HomeBanner} />
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

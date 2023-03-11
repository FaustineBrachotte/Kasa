import { Link } from 'react-router-dom'
import Card from '../../components/Card/card'
import Banner from '../../components/Banner/banner'
import HousingList from '../../data/housing.json'
import HomeBanner from '../../assets/home_banner.png'
import style from './home.module.scss'

function Home() {
  return (
    <div className={style.page}>
      <Banner
        parentClass="banner__small"
        src={HomeBanner}
        title="Chez vous, partout et ailleurs"
      />
      <section className={style.cards}>
        {HousingList.map((housing) => (
          <article key={housing.id}>
            <Link to={`/housing/${housing.id}`}>
              <Card cover={housing.cover} title={housing.title} />
            </Link>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Home

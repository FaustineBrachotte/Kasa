import Banner from '../../components/Banner/banner'
import AboutBanner from '../../assets/about_banner.jpg'
import Dropdown from '../../components/Dropdown/dropdown'
import { aboutList } from '../../data/aboutList'
import style from './about.module.scss'

function About() {
  return (
    <div className={style.page}>
      <Banner src={AboutBanner} />
      <div className={style.page__list}>
        {aboutList.map(({ id, title, description }) => (
          <Dropdown
            key={id}
            title={title}
            description={description}
            parentClass="about"
          />
        ))}
      </div>
    </div>
  )
}

export default About

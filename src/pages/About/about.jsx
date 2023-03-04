import Banner from '../../components/Banner/banner'
import AboutBanner from '../../assets/about_banner.png'
import Dropdown from '../../components/Dropdown/dropdown'
import { aboutList } from '../../data/aboutList'
import './about.module.scss'

function About() {
  return (
    <div className="aboutPage">
      <Banner src={AboutBanner} />
      <ul className="aboutList">
        {aboutList.map(({ id, title, description }) => (
          <Dropdown key={id} title={title} description={description} />
        ))}
      </ul>
    </div>
  )
}

export default About

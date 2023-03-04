import Banner from '../../components/Banner/banner'
import AboutBanner from '../../assets/about_banner.png'
import Dropdown from '../../components/Dropdown/dropdown'
import { aboutList } from '../../data/aboutList'

function About() {
  return (
    <div>
      <Banner src={AboutBanner} />
      <ul className="dropdown">
        {aboutList.map(({ id, title, description }) => (
          <Dropdown key={id} title={title} description={description} />
        ))}
      </ul>
    </div>
  )
}

export default About

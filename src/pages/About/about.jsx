import Banner from '../../components/Banner/banner'
import AboutBanner from '../../assets/about_banner.png'
import Dropdown from '../../components/Dropdown/dropdown'
import AboutList from '../../data/about.json'

function About() {
  return (
    <>
      <Banner src={AboutBanner} />
      {AboutList.map((about) => (
        <Dropdown title={about.title} description={about.description} />
      ))}
    </>
  )
}

export default About

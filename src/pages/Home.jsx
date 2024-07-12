import Navbar  from '../components/Navbar.jsx'
import Footer  from '../components/Footer.jsx'
import { headerSection } from '../data/Header.jsx'
import { exploreSection } from '../data/ContainerExplore.jsx'


import parse from 'html-react-parser'
function Home() {
  return (
    <>
        <Navbar/>

        {parse(headerSection.content)}

        {parse(exploreSection.content)}

        <Footer/>

    </>
  )
}

export default Home

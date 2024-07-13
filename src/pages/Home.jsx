import Navbar  from '../components/Navbar.jsx'
import Footer  from '../components/Footer.jsx'
import { headerSection } from '../data/Header.jsx'
import { exploreSection } from '../data/ContainerExplore.jsx'
import { clientSection } from '../data/ContainerClient.jsx'
import { specialSection } from '../data/ContainerSpecial.jsx'
import { unggulSection } from '../data/ContainerUnggul.jsx'
import { teamSection } from '../data/ContainerTeam.jsx'
import { formSection } from '../data/ContainerForm.jsx'


import parse from 'html-react-parser'
function Home() {
  return (
    <>
        <Navbar/>

        {parse(headerSection.content)}

        {parse(exploreSection.content)}

        {parse(clientSection.content)}

        {parse(specialSection.content)}

        {parse(unggulSection.content)}

        {parse(formSection.content)}

        {parse(teamSection.content)}

        <Footer/>

    </>
  )
}

export default Home

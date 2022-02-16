import React, {useState} from 'react'
import Navbar  from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Location from '../components/Location'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import { homeObjFour } from '../components/Location/Data'
import { homeObjThree } from '../components/Contact/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Contacto from '../components/Contact'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <Services/> 
            <Location {...homeObjFour}/>
            <Contacto {...homeObjThree}/>
            <Footer/>

        </>
    )
}
//<Services/>
export default Home;


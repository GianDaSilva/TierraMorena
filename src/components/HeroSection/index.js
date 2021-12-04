import React, {useState} from 'react'
import Video from '../../videos/maquina.mp4'
import {
HeroContainer,
HeroBg, 
VideoBg,
HeroContent,
HeroH1,
HeroP,
HeroBtnWrapper,
ArrowForward,
ArrowRight} 
    from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <>
           <HeroContainer id="home">
               <HeroBg>
                   <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
               </HeroBg>
               <HeroContent>
                   <HeroH1> Cantera Tierra Morena</HeroH1>
                   <HeroP>
                   En Cantera Tierra Morena contamos 
                   con variedad de materiales y servicios.
                   </HeroP>
                   <HeroBtnWrapper>
                       <Button to='nosotros' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Conocenos {hover ? <ArrowForward/> : <ArrowRight/>}
                       </Button>
                   </HeroBtnWrapper>
               </HeroContent>
           </HeroContainer>
        </>
    )
}

export default HeroSection;

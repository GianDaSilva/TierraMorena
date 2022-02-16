import React from 'react';
import {Button} from '../ButtonElement';
import { 
InfoContainer, 
InfoWrapper,
InfoRow,
Column1,
Column2,
TextWrapper,
TopLine,
Heading,
Subtitle,
BtnWrap,
ImgWrap,
Img 
} from './InfoElements';
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../images/Captura.png'
import img2 from '../../images/Captura de pantalla 2021-11-29 180712.png'
import CarouselContainer from '../CarouselContainer';
import { SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink } from '../Footer/FooterElements';
    import {
        FaFacebook,
        FaInstagram,
        FaYoutube,
        FaTwitter,
        FaLinkedin,
        FaWhatsapp,
        FaMailBulk,
        FaMailchimp,
        FaMap,
        FaMapMarker,
        FaMapMarked,
        FaMapMarkedAlt,
        FaMapMarkerAlt
      } from 'react-icons/fa';


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                             <CarouselContainer />
                        </ImgWrap> 
                    </Column2>
                </InfoRow>
            </InfoWrapper>
          </InfoContainer>  
        </>
    )
}
export default InfoSection;

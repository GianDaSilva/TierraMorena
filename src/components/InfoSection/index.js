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
                          {/* <BtnWrap>
                              <Button to='home'
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80}
                              primary={primary ? 1 : 0}
                              dark={dark ? 1 : 0}
                              dark2={dark2 ? 1 : 0}>
                                  {buttonLabel}
                              </Button>
                          </BtnWrap>  */}
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        {/* <ImgWrap> */}
                            <CarouselContainer />
                            {/* <Img src={img} alt={alt}/>  */}
                        {/* </ImgWrap> */}
                    </Column2>
                </InfoRow>
            </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default InfoSection;

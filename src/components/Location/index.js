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
} from './LocationElements';
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../images/Captura.png'
import img2 from '../../images/Captura de pantalla 2021-11-29 180712.png'
import CarouselContainer from '../CarouselContainer';
import Map from './map'
import credentials from './credentials';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

const Location = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
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
                    <Map 
                    googleMapURL= {mapURL}
                    containerElement= {<div style={{height: '400px'}} />}
                    mapElement= {<div style={{height:'100%'}}/>}
                    loadingElement = {<p> Cargando </p>}
                    />
                    </Column2>
                </InfoRow>
            </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default Location;

import React from 'react';
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
} from '../InfoSection/InfoElements'
import { animateScroll as scroll } from 'react-scroll';
import {FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink} from '../Contact/ContactElements';
import {FaFacebook,FaInstagram,FaYoutube,FaLinkedin,FaWhatsapp,FaMapMarkerAlt} from 'react-icons/fa';


const Contacto = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <Subtitle darkText={darkText}>{description}</Subtitle>
                          <SocialMedia>
          <SocialMediaWrap>
            
            <SocialIcons>
              <SocialIconLink href='//www.facebook.com/Cantera-Tierra-Morena-102154034864887' target='_blank' aria-label='Facebook'>
                <FaFacebook/>
              </SocialIconLink>
              <SocialIconLink href='//www.instagram.com/canteratierramorena' target='_blank' aria-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink target='_blank'aria-label='Whatsapp'href='//www.twitter.com/briandesignz'>
                <FaWhatsapp/>
              </SocialIconLink>
              <SocialIconLink href='https://www.google.com.ar/maps/place/Cantera+Tierra+Morena/@-34.8960428,-58.8534409,17z/data=!3m1!4b1!4m5!3m4!1s0x95bce5e97a4e929d:0xdbfd31545fd30a3c!8m2!3d-34.8960428!4d-58.8512522' target='_blank' aria-label='Linkedin'>
                <FaMapMarkerAlt/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
                        </TextWrapper>
                      </Column1>
                      <Column2>
                        <ImgWrap>
                          <Img src={img} alt={alt}/>   
                        </ImgWrap> 
                      </Column2>
                  </InfoRow>
             </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default Contacto;

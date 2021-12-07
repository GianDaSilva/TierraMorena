import React from 'react';
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
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
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
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}
            style={{fontFamily: 'Scriptina Pro'}}>Tierra <div style = {{ whiteSpace: "pre" }}>{`${'  '}`}</div> Morena
            </SocialLogo>
            <WebsiteRights>Tierra Morena © 2021 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='//www.facebook.com/Cantera-Tierra-Morena-102154034864887' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='//www.instagram.com/canteratierramorena' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Whatsapp'
                href='//www.twitter.com/briandesignz'
              >
                <FaWhatsapp />
              </SocialIconLink>
              <SocialIconLink href='https://www.google.com.ar/maps/place/Cantera+Tierra+Morena/@-34.8960428,-58.8534409,17z/data=!3m1!4b1!4m5!3m4!1s0x95bce5e97a4e929d:0xdbfd31545fd30a3c!8m2!3d-34.8960428!4d-58.8512522' target='_blank' aria-label='Linkedin'>
                <FaMapMarkerAlt />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

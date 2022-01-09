import React from 'react'
import { WrapperFooter, TopFooter, BottomFooter, ContactInfo, NavLinks, ItemLink, TextFooterStyled, SubtitleFooterStyled, ContainerInfo } from './styles/FooterStyles'
import facebookIcon from '../../assets/static/footer/facebook.svg'
import instagramIcon from '../../assets/static/footer/instagram.svg'
import twitterIcon from '../../assets/static/footer/twitter.svg'
import locationIcon from '../../assets/static/footer/location.svg'
import callIcon from '../../assets/static/footer/call.svg'
import messageIcon from '../../assets/static/footer/message.svg'

const Footer = () => {
    return (
        <WrapperFooter>
            <TopFooter>
                <SubtitleFooterStyled weight={"700"} white bottom15>Animalia.com</SubtitleFooterStyled>
                <ContainerInfo>
                    <ContactInfo>
                        <TextFooterStyled white paragraph image={locationIcon}><i></i>Ayacucho - Perú</TextFooterStyled>
                        <TextFooterStyled white paragraph image={callIcon}><i></i>666-123-243</TextFooterStyled>
                        <TextFooterStyled white paragraph image={messageIcon}><i></i>animalia@veterinary.com</TextFooterStyled>
                    </ContactInfo>
                    <NavLinks bot30top orderLast>
                        <ItemLink>
                            <img src={facebookIcon} alt="Nuestro Facebook"/>
                        </ItemLink>
                        <ItemLink>
                            <img src={instagramIcon} alt="Nuestro Instagram"/>
                        </ItemLink>
                        <ItemLink>
                            <img src={twitterIcon} alt="Nuestro Twitter"/>
                        </ItemLink>
                    </NavLinks>
                    <NavLinks>
                        <ItemLink>
                            <TextFooterStyled white paragraph>Acerca de Nosotros</TextFooterStyled>
                        </ItemLink>
                        <ItemLink>
                            <TextFooterStyled white paragraph>Términos y Políticas de Privacidad</TextFooterStyled>
                        </ItemLink>
                    </NavLinks>
                </ContainerInfo>
            </TopFooter>
            <BottomFooter>
                <TextFooterStyled white>© 2021 Todos los Derechos Reservados</TextFooterStyled>
            </BottomFooter>
        </WrapperFooter>
    );
}
 
export default Footer;
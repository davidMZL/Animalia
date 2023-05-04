import React from 'react'
import { useHistory } from 'react-router-dom'
import { HeroWrapper, HeroContainer, ChildHeroContainer } from './styles/HeroStyles'
import { ButtonStyled, TitleStyled, SubtitleStyled, TextStyled } from '../../theme/internalStyles'
import dogImage from '../../assets/static/landing/main-dog.png'
import dogsFoodImage from '../../assets/static/landing/dogs.png'
import littleHouseImage from '../../assets/static/landing/little-house.png'
import animalsImage from '../../assets/static/landing/animals.png'

const Hero = () => {
    const history = useHistory()
    // console.log(history)
    return ( 
        <HeroWrapper>
            <HeroContainer>
                <ChildHeroContainer image={dogImage}>
                    <TitleStyled white weight="700" bottom27>Al cuidado de tu mascota</TitleStyled>
                    <ButtonStyled bottom20 fontWeight="600" onClick={() => history.push("/reserva")}>Reserva tu cita <span></span></ButtonStyled>
                    <TextStyled white width155>Nos aseguramos que tu  mascota  esté sana y segura en nuestos espacios.</TextStyled>
                    <img src={dogImage} alt="Imagen de un perro"/>
                </ChildHeroContainer>
                <ChildHeroContainer>
                    <SubtitleStyled weight="700" bottom10 line30>Todo lo que tu mascota ama</SubtitleStyled>
                    <TextStyled width155>Con descuentos de 20% en la compra de alimentos.</TextStyled>
                    <img src={dogsFoodImage} alt="Imagen de comida de perro"/>
                </ChildHeroContainer>
                <ChildHeroContainer>
                    <TextStyled>Accesorios para todos los </TextStyled>
                    <SubtitleStyled weight="700" bottom27 line30>animales</SubtitleStyled>
                    <img src={littleHouseImage} alt="Imagen de un hamster"/>
                </ChildHeroContainer>
                <ChildHeroContainer>
                    <SubtitleStyled weight="700" bottom10 line30 white>Atención a todas tus mascotas</SubtitleStyled>
                    <TextStyled white>Contamos con especialistas que te ayudarán</TextStyled>
                    <img src={animalsImage} alt="Imagen de animales"/>
                </ChildHeroContainer>
            </HeroContainer>

        </HeroWrapper>
    );
}
 
export default Hero;
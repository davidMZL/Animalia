import React from 'react'
import { CarouselContainer } from './styles/CarouselStyles'

const Carousel = ({children}) => {
    return ( 
        <CarouselContainer>
            {children}
        </CarouselContainer>
    );
}
 
export default Carousel;
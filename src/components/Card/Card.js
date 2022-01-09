import React from 'react'
import { connect } from 'react-redux'
import { CardContainer, TopCard, BottomCard, BottomCardContent } from './styles/CardStyle'
import { TextStyled } from '../../theme/internalStyles'
import cartIcon from '../../assets/static/header/cart.svg'
import { addCart } from '../../actions'

const Card = ({id, name, description, image, price, addCart}) => {

    const handleAddCart = (id, name, description, image, price) => {
        addCart({id, name, description, image, price})
    }

    return ( 
        <CardContainer>
            <TopCard>
                <img src={image} alt="Card de un producto"/>
            </TopCard>
            <BottomCard>
                <TextStyled weight="700" bottom10>{name}</TextStyled>
                <TextStyled weight="300" bottom20>{description}</TextStyled>
                <BottomCardContent>
                    <TextStyled weight="700">$ {price},00</TextStyled> 
                    <img src={cartIcon} alt="Carrito de Compras" onClick={() => handleAddCart(id, name, description, image, price)}/>
                </BottomCardContent>
            </BottomCard>
        </CardContainer>
    );
}

const mapDispatchToProps = {
    addCart
}
 
export default connect(null, mapDispatchToProps)(Card);
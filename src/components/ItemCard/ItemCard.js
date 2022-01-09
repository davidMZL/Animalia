import React from 'react'
import { connect } from 'react-redux'
import { ItemCardContainer, LeftItemCard, RightItemCard, BottomItemCard } from './styles/ItemCardStyles'
import { TextStyled } from '../../theme/internalStyles'
import Counter from './Counter'
import { deleteCart } from '../../actions/index'

const ItemCard = ({id, description, image, name, price, quantity, cod, deleteCart}) => {
    // console.log(cod)
    return ( 
        <ItemCardContainer>
            <LeftItemCard>
                <figure>
                    <img src={image} alt="Imagen del Producto"/>
                </figure>
            </LeftItemCard>
            <RightItemCard>
                <TextStyled weight="700" paragraph>{name}</TextStyled>
                <TextStyled weight="300" bottom20>{description}</TextStyled>
                <BottomItemCard>
                    <TextStyled weight="700">$ {price},00</TextStyled>
                    <Counter count={quantity} cod={cod}/>
                    <TextStyled weight="300" fontSize7 grayTransparent onClick={() => deleteCart(cod)}>Quitar</TextStyled>
                </BottomItemCard>
            </RightItemCard>
        </ItemCardContainer>
    );
}
 
const mapDispatchToProps = {
    deleteCart
}


export default connect(null, mapDispatchToProps)(ItemCard);
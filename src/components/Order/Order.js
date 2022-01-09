import React, { useEffect } from 'react'
import { OrderContainer, LineSeparator, CostsContainer, ItemOrderContainer } from './styles/OrderStyle'
import { SubtitleStyled, TextStyled} from '../../theme/internalStyles'
import ItermCard from '../ItemCard/ItemCard'
import { connect } from 'react-redux'
import OrderList from './OrderList'

const Order = ({myList, setTotalPriceCart, totalPriceCart}) => {
    
    let ListCart = [];
    let TotalCart=0;

    const total = myList.forEach(function(item) {
        TotalCart += item.quantity*item.price
        ListCart.push(item)
    })

    function TotalPrice(price, discount) {
        return Number(price * discount).toLocaleString('en-US')
    }

    useEffect(() => {
        setTotalPriceCart(TotalCart)
    }, [])
    
    return ( 
        <OrderContainer>
            <CostsContainer>
                <SubtitleStyled>Tu Orden</SubtitleStyled>
            </CostsContainer>
            <LineSeparator/>

            <ItemOrderContainer>
                {(myList.length > 0) &&
                    myList.map((item, key) =>  <OrderList key={item.id} item={item} cod={key}/>)
                }
            </ItemOrderContainer>
            <LineSeparator/>

            <CostsContainer>
                <TextStyled>Envío</TextStyled>  
                <TextStyled>S/ 0</TextStyled>  
            </CostsContainer>
            <CostsContainer>
                <TextStyled>Descuento</TextStyled>  
                <TextStyled>0%</TextStyled>  
            </CostsContainer>
            <LineSeparator/>
            <CostsContainer>
                <SubtitleStyled>Total</SubtitleStyled>
                <SubtitleStyled>S/ {totalPriceCart}</SubtitleStyled>
            </CostsContainer>
            <LineSeparator/>
        </OrderContainer>
    );
}

const mapStateToProps = state => {
    return {
        myList: state.myList
    }
}

export default connect(mapStateToProps, null)(Order);
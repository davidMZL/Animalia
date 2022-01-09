import React, { Component } from 'react'
import { LineSeparator} from './styles/OrderStyle'
import ItermCard from '../ItemCard/ItemCard'


const OrderList = ({item, cod}) => {
    return ( 
        <>
            <ItermCard 
                description={item.description} 
                image={item.image} 
                name={item.name} 
                price={item.price} 
                quantity={item.quantity}
                id={item.id}
                cod={cod}
            />
                
            <LineSeparator/>
        </> 
    );
}
 
export default OrderList;
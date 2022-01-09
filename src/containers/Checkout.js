import React, { useState } from 'react'
import Order from '../components/Order/Order'
import CartForm from '../components/FormCart/CartForm'
import { SubtitleStyled } from '../theme/internalStyles'
import { ContainerCheckout, CheckoutTitle} from './styles/CheckoutStyles'
import Info from '../components/Info/Info'

const Checkout = () => {
    const [totalPriceCart, setTotalPriceCart] = useState(0)
    return (
        <> 
            {/* <Header/> */}
            <CheckoutTitle>
                <SubtitleStyled weight="700">Carrito de Compras</SubtitleStyled>
            </CheckoutTitle>
            <ContainerCheckout>
                <Order setTotalPriceCart={setTotalPriceCart} totalPriceCart={totalPriceCart}/>
                <CartForm totalPrice={totalPriceCart}/>
            </ContainerCheckout>
            <Info text1="Envío Rápidos" text2="Producto Asegurado" text3="Reembolsos"/>
        </>
    );
}
 
export default Checkout;
import React, { useEffect, useState } from 'react'
import { PayContainer, PictureImage } from './styles/Pay'
import { TextBody, ButtonMixin } from '../theme/externalStyles'
import Pago from '../assets/static/pay/cuentas.jpg'
import { useSelector } from 'react-redux'

const Pay = (props) => {
    const [loading, setLoading] = useState(false)
    const totalPrice = useSelector((state) => state.totalPrice)

    const handleClick = () => {
        setLoading(true)
        const timeOut = setTimeout(() => {
            setLoading(false)
            props.history.push("/")
        }, 3000)
        
    }

    useEffect(() => {
        return () => {
            clearTimeout(handleClick)
        }
    }, [])
    return (
        <PayContainer>
            <TextBody>Procede a pagar la suma de {totalPrice} a la siguiente cuenta. Tiene un plazo de 2 días</TextBody>
            <PictureImage>
                <img src={Pago} alt="Imágen de pago"/>
            </PictureImage>
            <ButtonMixin onClick={() => handleClick()}>{loading ? "Cargando" : "Terminar" }</ButtonMixin>
            
        </PayContainer>
    )
}

export default Pay

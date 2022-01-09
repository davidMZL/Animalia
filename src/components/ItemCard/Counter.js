import React from 'react'
import { connect } from 'react-redux'
import { ContainerCount } from './styles/CounterStyle'
import { TextStyled } from '../../theme/internalStyles'
import Minor from '../../assets/static/reservation/Count/minor.svg'
import Plus from '../../assets/static/reservation/Count/plus.svg'
import { increaseQuantity, decreaseQuantity } from '../../actions/index'

const Counter = ({count, increaseQuantity, cod}) => {
    return ( 
        <ContainerCount>
            <img src={Minor} alt="Disminuir Cantidad" className="minor" onClick={() => decreaseQuantity(cod)}/>
            <TextStyled weight="600" fontSize7>{count}</TextStyled>
            <img src={Plus} alt="Aumentar Cantidad" className="plus" onClick={() => increaseQuantity(cod)}/>
        </ContainerCount>
    );
}

const mapDispatchToProps = {
    increaseQuantity,
    decreaseQuantity
}

export default connect(null, mapDispatchToProps)(Counter);
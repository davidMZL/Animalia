import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import firebase from 'firebase/app'
import { connect } from 'react-redux'
import { useFirestore } from 'reactfire'
import { WrapperMain, Navigation, ItemHeader, HeaderUl, InputSearch, TextUserName } from './styles/HeaderStyles'
import { ButtonStyled } from '../../theme/internalStyles'
import hambuger from '../../assets/static/header/hamburger.svg'
import cart from '../../assets/static/header/cart.svg'
import logoText from '../../assets/static/logo/logoText.png'
import { TextStyled } from '../../theme/internalStyles'
import profileImage from '../../assets/static/panel_fixed/user/user_circle.svg'
import { SignOut } from './algorithms/SignOut'

const Header = ({authState, numberCart}) => {
    const history = useHistory()

    // console.log(numberCart)
    return(
        <WrapperMain>
            <Navigation>
                <HeaderUl>
                    <ItemHeader>
                        <img src={hambuger} alt="Menú"/>
                    </ItemHeader>
                    <ItemHeader>
                        <Link to="/">
                            <img src={logoText} alt="Menú"/>
                        </Link>
                    </ItemHeader>
                    <ItemHeader notMobile="none">
                        <TextStyled as={Link} to="/">Inicio</TextStyled >
                    </ItemHeader>
                    <ItemHeader notMobile="none">
                        <TextStyled>Nosotros</TextStyled>
                    </ItemHeader>
                    <ItemHeader notMobile="none">
                        <TextStyled>Tienda</TextStyled>
                    </ItemHeader>
                    <ItemHeader notMobile="none">
                        <Link to="/reserva">
                            <TextStyled>Servicios</TextStyled>
                        </Link>
                    </ItemHeader>
                    <ItemHeader notMobile="none">
                        <TextStyled>Contáctanos</TextStyled>
                    </ItemHeader>
                    <ItemHeader notMobile="none">
                        <i></i>
                        <InputSearch placeholder="Buscar..."/>
                    </ItemHeader>
                    <ItemHeader className="cart">
                        <Link to="/checkout"> 
                            <img src={cart} alt="Menú"/>
                        </Link>
                        <small >{numberCart}</small>
                    </ItemHeader>
                    {!authState ?
                        <ItemHeader notMobile="none">
                            <ButtonStyled onClick={() => history.push("/login")}>Inicia Sesión <span></span></ButtonStyled>
                        </ItemHeader> :
                        <ItemHeader notMobile="none" className="profile">
                            <Link to={`/u/${authState.uid}`}> 
                                <img src={profileImage} alt="Menú"/>
                            </Link>
                            <TextUserName>{authState.displayName} </TextUserName>
                            <ul>
                                <li onClick={() => SignOut(firebase)}>Cerrar Sesión</li>
                            </ul>
                        </ItemHeader>
                    }
                    
                </HeaderUl>
            </Navigation>
        </WrapperMain>

    )
}

const mapStateToProps = state => {
    return {
        numberCart: state.numberCart
    }
}

export default connect(mapStateToProps, null)(Header)
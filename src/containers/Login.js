import React, { useState, useEffect } from 'react'
import firebase  from 'firebase/app'
import { Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { TitleStyled, SubtitleStyled, TextStyled } from '../theme/internalStyles'
import { Input, InputSubmit, Form, NavLink } from '../theme/externalStyles'
import { LoginContainer, RightWallPaper, PictureImage } from './styles/LoginStyles'
import { LineSeparator } from '../components/Order/styles/OrderStyle'
import animaliaLogo from '../assets/static/logo/logoFull.png'
import { SignInUser } from './algorithms/SignInUser'

const Login = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm()
    const [confirmLogin, setConfirmLogin] = useState(null)

    useEffect(() => {

        return () => {
            setConfirmLogin(null)
        }
    }, [confirmLogin])

    const onHandleSubmit = async data => {
        let resultLogin = await SignInUser(firebase, data)
        await setConfirmLogin(resultLogin)
        reset()
    }

    return ( 
        <>
            {confirmLogin ?
                <Redirect to="/" /> :
                <LoginContainer>
                    <Form onSubmit={handleSubmit(onHandleSubmit)} center top30>
                        <SubtitleStyled dark bottom15>Inicia Sesión</SubtitleStyled>
                        <TextStyled bottom30>Bienvenido</TextStyled>
                        <Input type="email" {...register('email', {required: true})} placeholder="Correo" bottom40/>
                        <Input type="password" {...register('password', {required: true})} placeholder="Contraseña" bottom18/>
                        <LineSeparator/>

                        <InputSubmit type="submit" value="Iniciar Sesión" top20btm40/>
                        <TextStyled>No tienes cuenta? <NavLink orange="true" to="/register">Regístrate</NavLink></TextStyled>
                    </Form>
                    <RightWallPaper>
                        <TitleStyled white weight="700">Al cuidado de tu mascota</TitleStyled>
                        <PictureImage>
                            <img src={animaliaLogo} alt="Log de Animalia"/>
                        </PictureImage>
                        <TextStyled white>Volver al inicio  <NavLink orange="true" to="/">Home</NavLink></TextStyled>
                    </RightWallPaper>
                </LoginContainer>
            }
        </>
    );
}
 
export default Login;
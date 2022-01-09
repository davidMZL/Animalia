import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { Redirect } from 'react-router-dom'
import 'firebase/auth'
import {useAuth, useFirestore} from 'reactfire'
import { useForm } from 'react-hook-form'
import { TitleStyled, SubtitleStyled, TextStyled } from '../theme/internalStyles'
import { Input, InputSubmit, Form, NavLink, Select } from '../theme/externalStyles'
import { RegisterContainer, RightWallPaper, PictureImage } from './styles/RegisterStyles'
import { LineSeparator } from '../components/Order/styles/OrderStyle'
import animaliaLogo from '../assets/static/logo/logoFull.png'
import { RegisterWithEmail } from './algorithms/RegisterWithEmail'


const Register = () => {
    const auth = useAuth()
    const firestore = useFirestore()
    const { register, handleSubmit, formState: {errors}, reset, getValues } = useForm()
    const [loading, setLoading] = useState(false)
    const [emailRegistered, setEmailRegistered] = useState(null)

    useEffect(() => {

        return () => {
            setEmailRegistered(null)
        }
    }, [emailRegistered])

    const onHandleSubmit = async data => {
        setLoading(true)
        const resultRegister = await RegisterWithEmail(auth, firebase, firestore, data)
        await setEmailRegistered(resultRegister)
        reset()
        setLoading(false)
    }

    if(loading) {
        return <p>Loading</p>
    }

    return (
        <>
            {emailRegistered ?
                <Redirect to="/"/> :
                <RegisterContainer>
                    <Form onSubmit={handleSubmit(onHandleSubmit)} center top30>
                        <SubtitleStyled dark bottom15>Regístrate</SubtitleStyled>
                        <TextStyled bottom30>No tienes una cuenta?</TextStyled>
                        <Input type="text" {...register('fullName', {required: true})} placeholder="Nombre Completo" bottom18/>
                        <Input type="email" {...register('email', {required: true})} placeholder="Correo" bottom18/>
                        <Select {...register("rol", {required: true})} bottom18>
                            <option value="">Select...</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </Select>
                        <Input type="password" ref={getValues} {...register('password', {required: true, minLength: 6})} placeholder="Contraseña" bottom18/>
                        <Input type="password" {...register('passwordTwo', {required: true, validate: { emailEqual: value => (value === getValues().password) || <small>*Las contraseñas deben de coincidir</small>}})} placeholder="Confirma tu contraseña" bottom18/>
                        {errors.password && <small>*La contraseña debe ser mayor a 5 dígitos</small>}
                        {errors.passwordTwo?.message}
                        {!emailRegistered && <small>Ya existe una cuenta con este correo</small>}
                        <LineSeparator/>

                        <InputSubmit type="submit" value="Iniciar Sesión" top20btm40/>
                        <TextStyled>Tengo una cuenta! <NavLink orange="true" to="/login">Inicia Sesión</NavLink></TextStyled>
                    </Form>
                    <RightWallPaper>
                        <TitleStyled white weight="700">Al cuidado de tu mascota</TitleStyled>
                        <PictureImage>
                            <img src={animaliaLogo} alt="Logo de Animalia"/>
                        </PictureImage>
                        <TextStyled white>Volver al inicio  <NavLink orange="true" to="/">Home</NavLink></TextStyled>
                    </RightWallPaper>
                </RegisterContainer>
            }
        </>
    );
}
 
export default Register;
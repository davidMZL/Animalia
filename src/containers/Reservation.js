import React, { useContext, useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { useFirestore } from 'reactfire'
import { useForm } from 'react-hook-form'
import { MainContainerReservation, PictureImage } from './styles/ReservationStyle'
import { SubtitleStyled, TextStyled } from '../theme/internalStyles'
import { Form, Input, InputSubmit } from '../theme/externalStyles'
import catDogImage from '../assets/static/reservation/cat-dog.png'
import { AppContext } from '../routes/App' 
import { SaveReservation } from './algorithms/SaveReservation'

const Reservation = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    const {authState} = useContext(AppContext)
    const firestore = useFirestore()
    const [isLogged, setIsLogged] = useState(null)
    const [isReserved, setIsReserved] = useState(null)
    const date = new Date()

    useEffect(async () => {
        if(authState) {
            setIsLogged(true)
        }

        const setTime = setTimeout(() => {
            setIsReserved(null)
        }, 3000)

        return () => {
            clearTimeout(setTime)
            setIsLogged(null)
            setIsReserved(null)
        }
    }, [isLogged, isReserved])

    const onHandleSubmit = async data => {
        // console.log(data)
        if(authState.uid) {
            let saveConfirm = await SaveReservation(firebase, firestore, data, authState.uid)
            await setIsReserved(saveConfirm)
            reset()
        }
    }

    return ( 
        <MainContainerReservation>
            <PictureImage>
                <img src={catDogImage} alt="Imagen de un perro y un gato"/>
            </PictureImage>
            <Form center onSubmit={handleSubmit(onHandleSubmit)} top30>
                <SubtitleStyled weight="700" fontSize20 bottom40>RESERVA CITA PARA TU MASCOTA</SubtitleStyled>
                <label htmlFor="name">Nombre</label>
                <Input type="text" {...register('name', {required: true})} id="name" tp9bt22/>
                <label htmlFor="Number">Teléfono</label>
                <Input type="text" {...register('phone', {required: true})} id="phone" tp9bt22/>
                <label htmlFor="date">Fecha</label>
                <Input type="datetime-local" min={date.toISOString().slice(0, -8)} max="2022-04-20T16:30" {...register('date', {required: true})} id="date" tp9bt22/>
                <InputSubmit type="submit" value="Enviar" top20btm40 disabled={!isLogged ? true : false}/>
                {!isLogged && <TextStyled bottom20 dark>Regístrate para hacer una reserva</TextStyled>}
                {isReserved && <TextStyled bottom20>Reserva Solicitada</TextStyled>}
            </Form>
        </MainContainerReservation>
    );
}
 
export default Reservation;
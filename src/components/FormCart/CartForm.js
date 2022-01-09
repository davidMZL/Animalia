import React, { useContext } from 'react'
import firebase from 'firebase/app'
import { useFirestore } from 'reactfire'
import { useForm } from 'react-hook-form'
import { Input, InputSubmit } from '../../theme/externalStyles' 
import { TextStyled } from '../../theme/internalStyles' 
import { InputContainer, FormStyled } from './styles/CartFormStyles'
import { SaveCartForm } from './algorithms/SaveCartForm'
import { AppContext } from '../../routes/App'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { addTotalPrice, addCart} from '../../actions/index'
import { useHistory } from 'react-router-dom'

const CartForm = ({totalPrice, addTotalPrice, addCart}) => {
    const {authState} = useContext(AppContext)
    const history = useHistory()
    const firestore = useFirestore()
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    const listaProductos = useSelector((state) => state.myList)

    const onSubmit = async (data) => {
        if(!authState) {
            return false
        }
        let saveConfirm = await SaveCartForm(firebase, firestore, data, authState.uid, listaProductos, totalPrice)
        addTotalPrice({totalPrice})
        // await setIsReserved(saveConfirm)
        reset()
        history.push("/pagar")
    }

    const onHandleCancel = () => reset()

    return ( 
        <>
            <FormStyled center onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <Input type="text" {...register('name', {required: true})} placeholder="Nombres" bottom18/>
                    {/* {errors.name && <p>Por favor, ingrese un nombre</p>} */}
                    <Input type="text" {...register('lastName', {required: true})} placeholder="Apellido" bottom18/>
                    {/* {errors.lastName && <p>Por favor, ingrese un apellido</p>} */}
                    <Input type="text" {...register('address', {required: true})} placeholder="Dirección" bottom18/>
                    {/* {errors.address && <p>Por favor, ingrese una dirección</p>} */}
                    <Input type="text" {...register('city', {required: true})} placeholder="Ciudad" bottom18/>
                    <Input type="text" {...register('postalCode', {required: true})} placeholder="Código Postal" required bottom18/>
                    <Input type="Number" {...register('number')} placeholder="Número" bottom18/>
                    <Input type="text" {...register('country')} placeholder="País"/>
                </InputContainer>
                <InputSubmit type="submit" bottom20 value="Guadar y Enviar"/>
                <TextStyled underline onClick={() => onHandleCancel()}>Cancelar</TextStyled>
                <br/>
                {!authState&&"Inicia sesión primero"}   
            </FormStyled>
        </> 
    );
}
 
const mapDispatchToProps = {
    addTotalPrice,
    addCart
}
export default connect(null, mapDispatchToProps)(CartForm);
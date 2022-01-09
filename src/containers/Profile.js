import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import firebase from 'firebase/app'
import { useFirestore } from 'reactfire'
import 'firebase/firestore';
import { MatchProfile } from './algorithms/MatchProfile'
import { ProfileWrapper, ProfileInfoContent, OrdersContent, ReservationContent, ProfilePhoto, RowsTable, ItemOrder, ContainerTable, LineSeparatorTable } from './styles/ProfilesStyles'
import profileImage from '../assets/static/panel_fixed/user/user_circle.svg' 
import { TextStyled, SubtitleStyled } from '../theme/internalStyles'
import ListReservation from '../components/Table/ListReservation'
import ListOrderReservation from '../components/Table/ListOrderReservation'
import AdminProfile from './adminContainer/AdminProfile'

const Profiles = () => {
    const firestore = useFirestore()
    const {params: {id}} = useRouteMatch("/u/:id")
    const [userData, loading, error] = MatchProfile("users", id)

    if(loading) return <p>Loading</p>
    if(error) return <p>Error</p>

    const userDataProfile = userData[0]

    return (  
        <>  {(userDataProfile.rol == "user")?
            <ProfileWrapper>
                <ProfileInfoContent>
                    <ProfilePhoto>
                        <img src={profileImage} alt="Foto de Perfil"/>
                        <TextStyled>{userDataProfile.fullName}</TextStyled>
                    </ProfilePhoto>
                </ProfileInfoContent>
                <ReservationContent>
                    <SubtitleStyled weight="700" bottom40>Mis Reservas</SubtitleStyled>
                    <ContainerTable>
                        <RowsTable row1>
                            <ItemOrder>Servicio</ItemOrder>
                            <ItemOrder>Fecha</ItemOrder>
                            <ItemOrder>--</ItemOrder>
                            <ItemOrder>Estado</ItemOrder>
                        </RowsTable>
                        <ListReservation uid={userDataProfile.uid} reservationDoc={"reservation"}/>
                    </ContainerTable>
                </ReservationContent>
                <OrdersContent>
                    <SubtitleStyled weight="700" bottom40>Mis Órdenes</SubtitleStyled>
                    <ContainerTable>
                        <RowsTable row1>
                            <ItemOrder>Orden</ItemOrder>
                            <ItemOrder>Fecha</ItemOrder>
                            <ItemOrder>Precio</ItemOrder>
                            <ItemOrder>Estado</ItemOrder>
                        </RowsTable>
                        {/* <LineSeparatorTable/> */}
                        <ListOrderReservation uid={userDataProfile.uid} reservationDoc={"carts"}/>
                    </ContainerTable>
                </OrdersContent>
            </ProfileWrapper>:
            <AdminProfile id={id}/>
            }
        </>
    );
}
 
export default Profiles;
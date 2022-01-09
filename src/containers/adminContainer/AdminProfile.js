import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import firebase from 'firebase/app'
import { useFirestore } from 'reactfire'
import 'firebase/firestore';
import { MatchProfile } from './../algorithms/MatchProfile'
import { ProfileWrapper, ProfileInfoContent, OrdersContent, ReservationContent, ProfilePhoto, RowsTable, ItemOrder, ContainerTable, LineSeparatorTable } from './../styles/ProfilesStyles'
import profileImage from '../../assets/static/panel_fixed/user/user_circle.svg' 
import { TextStyled, SubtitleStyled } from '../../theme/internalStyles'
import ListOrderReservationAdmin from '../../components/Table/ListOrderReservationAdmin'
import ListReservation from '../../components/Table/ListReservation'
import ListReservationAdmin from '../../components/Table/ListReservationAdmin'

const AdminProfile = ({id}) => {
    const firestore = useFirestore()
    const [userData, loading, error] = MatchProfile("users", id)

    if(loading) return <p>Loading</p>
    if(error) return <p>Error</p>

    const userDataProfile = userData[0]

    return (  
        <ProfileWrapper>
            <ProfileInfoContent>
                <ProfilePhoto>
                    <img src={profileImage} alt="Foto de Perfil"/>
                    <TextStyled>{userDataProfile.fullName} - Admin</TextStyled>
                </ProfilePhoto>
            </ProfileInfoContent>
            <ReservationContent>
                <SubtitleStyled weight="700" bottom40>Mis Reservas</SubtitleStyled>
                <ContainerTable>
                    <RowsTable row1>
                        <ItemOrder>Servicio</ItemOrder>
                        <ItemOrder>Fecha</ItemOrder>
                        <ItemOrder>Nombre</ItemOrder>
                        <ItemOrder>Estado</ItemOrder>
                    </RowsTable>
                    <ListReservationAdmin reservationDoc={"reservation"}/>
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
                    <ListOrderReservationAdmin reservationDoc={"carts"} />
                </ContainerTable>
            </OrdersContent>
        </ProfileWrapper>
    );
}
 
export default AdminProfile;
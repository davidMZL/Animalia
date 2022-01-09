import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import { useFirestore } from 'reactfire'
import 'firebase/firestore';
import RowTableOrder from './RowTableOrder'

const ListOrderReservationAdmin = () => {
    const firestore = useFirestore()
    const [reservationList, setReservation] = useState(null)
    const [pending, setPending] = useState(true)

    useEffect(() => {
        const subscriber =  firestore
        .collection("carts")
        .onSnapshot((snapshot) => {
            const reservation = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
            setReservation(reservation)
            setPending(false)
        });
        return ()=> subscriber()
    }, [firestore]);
    

    if(pending) return <p>Loading...</p>

    return (  
        <>
            {reservationList && reservationList.map(item => <RowTableOrder key={`${item.id}`} {...item}/>)}
        </>
    );
}
 
export default ListOrderReservationAdmin;



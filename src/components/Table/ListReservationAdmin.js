import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import { useFirestore } from 'reactfire'
import 'firebase/firestore';
import RowTable from './RowTable'

const ListReservationAdmin = ({reservationDoc}) => {
    const firestore = useFirestore()
    const [reservationList, setReservation] = useState(null)
    const [pending, setPending] = useState(true)

    useEffect(() => {
        const subscriber =  firestore
        .collection(reservationDoc)
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
            {reservationList && reservationList.map(item => <RowTable key={`${item.id}`} {...item}/>)}
        </>
    );
}
 
export default ListReservationAdmin;



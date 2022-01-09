import { uuidv4 } from '../../../containers/algorithms/GenerateUid'

export const SaveCartForm = async (firebase, firestore, data, uid, listaProductos, totalPrice) => {
    const { address, city, country, lastName, name, number, postalCode } = data
    const batch = await firestore.batch()
    const reservationRef = await firestore.collection("carts").doc()
    const orderId = await uuidv4();

    batch
    .set(reservationRef, {
        uid,
        orderId,
        address,
        city,
        country,
        lastName,
        name,
        number,
        postalCode,
        state: "Pendiente",
        orders: listaProductos,
        totalPrice,
        timeCreated: firebase.firestore.FieldValue.serverTimestamp()
    }, 
    {merge: true})

    return await batch.commit().then(() => {
        return true
    }).catch(err => {
        console.error(err.message)
        return false
    })

}
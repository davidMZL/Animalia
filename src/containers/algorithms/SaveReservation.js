export const SaveReservation = async (firebase, firestore, data, uid) => {
    const { name, date, phone } = data
    const batch = await firestore.batch()
    const reservationRef = await firestore.collection("reservation").doc()

    batch
    .set(reservationRef, {
        uid,
        name,
        date: firebase.firestore.Timestamp.fromDate(new Date(date)),
        phone,
        state: "Pendiente",
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
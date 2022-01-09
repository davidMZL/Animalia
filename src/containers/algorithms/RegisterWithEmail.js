export const RegisterWithEmail = async (auth, firebase, firestore, data) => {
    const { email, password, fullName} = data
    const finalResult = await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async result => {
        await result.user.updateProfile({
            displayName: await fullName,
        })
        await result.user

        const confirmation = await saveDataUser(firestore, data, result.user.uid)
        console.log("Created Successfully")
        return confirmation
    })
    .catch(error => {
        console.log(error.message)
        return false    
    })
    return finalResult
}


export const saveDataUser = async (firestore, data, uid) => {
    const { email, password, fullName, rol} = await data
    const batch = await firestore.batch()
    const userRef = await firestore.collection("users").doc(uid)

    batch.set(
    userRef,
    {
        uid,
        fullName,
        email,
        rol
    }, 
    {merge: true}
    )

    return await batch.commit().then(() => {
        return true
    }).catch(error => {
        return false
    })
}
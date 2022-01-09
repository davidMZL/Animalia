export const SignInUser = async (firebase, data) => {
    const { email, password} = data
    let confirmLogin = firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
        // return {email, displayName: result.user.displayName, uid: result.user.uid}
        return true
    })
    .catch(error => {
        console.error(error.message)
        return false
    })

    return confirmLogin
}
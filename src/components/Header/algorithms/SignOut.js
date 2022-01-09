export const SignOut = (firebase) => {
    firebase.auth().signOut().then(() => {
        console.log("User SignOut")
        window.location.reload()
        return true
    })
    .catch(err => {
        console.error(err.message)
        return false
    })
}
import { useState, useEffect } from 'react'
import { useFirestore } from 'reactfire'
import { /* useRouteMatch, */ useHistory }  from 'react-router-dom'

export const MatchProfile = (collection, nameUserRoute) => {
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(false)
  const [ userData, setUserData] = useState([])

  const history = useHistory()
  const firestore = useFirestore()
  
  useEffect(() => {
    const unsubscribe = firestore.collection(collection).where("uid", "==", nameUserRoute).onSnapshot(userInfo => {
        if(userInfo.empty) {
          console.error("No existen datos")
          history.push("/")
          return null 
        } else {
          const collectionData = userInfo.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          setUserData(collectionData)
          setLoading(false)
        }
    }, err => {
      setError(true)
      console.error("Error", err.message)
      history.push("/register")
    })
      
    return () => unsubscribe()
  }, [firestore])

  return [userData, loading, error]
}
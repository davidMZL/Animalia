import React,{useState, useEffect}  from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import GlobalStyle from '../theme/globalStyles'
import {useAuth, useFirestore} from 'reactfire'
import Home from '../containers/Home'
import Checkout from '../containers/Checkout'
import Reservation from '../containers/Reservation'
import Pay from '../containers/Pay'
import LayoutPrincipalRoute from '../components/Layout/LayoutPrincipalRoutes'
import LayoutOutAuth from '../components/Layout/LayoutOutAuth'
import LayoutAdminRoute from '../containers/adminContainer/AdminProfile'
import Login from '../containers/Login'
import Register from '../containers/Register'
import Profile from '../containers/Profile'
import { RecoverUser } from '../containers/algorithms/RecoverUser'
import AdminProfile from '../containers/adminContainer/AdminProfile'

const AppContext =  React.createContext()
const {Provider, Consumer} = AppContext

function App() {
  const auth = useAuth()
  const firestore = useFirestore()
  const [loading, setLoading] = useState(true)
  const [authState, setAuthState] = useState(false)
  const [userFromDB, setUserFromDB] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged(async user=> {
      if(user) {
        setAuthState(user)
        let dataUser = await RecoverUser(firestore, user.uid)
        setUserFromDB(dataUser)
      }
      setLoading(false)
    })
  }, [auth])

  const userValue = {
    authState: (authState? authState: false),
    userFromDB: (userFromDB? userFromDB: false)
  }

  if(loading) return <p>Loading...</p>
  return (
    <Router>
      <Provider value={userValue}>
        <GlobalStyle/>
        <Switch>
          <LayoutPrincipalRoute exact path="/" authState={authState} component={Home}/>
          <LayoutPrincipalRoute exact path="/checkout" authState={authState} component={Checkout}/>
          <LayoutPrincipalRoute exact path="/reserva" authState={authState} component={Reservation}/>
          <LayoutPrincipalRoute exact path="/pagar" authState={authState} component={Pay}/>
          <LayoutPrincipalRoute exact path="/u/:id" authState={authState} component={Profile}/>
          <LayoutOutAuth exact path="/login" authState={authState} component={Login}/>
          <LayoutOutAuth exact path="/register" authState={authState} component={Register}/>
          {/* <LayoutAdminRoute exact path="/:admin" authState={authState} userFromDB={userFromDB} component={AdminProfile}/> */}
          <Route path="/404" render={() => <p>Sitio No Encontrado</p>}/>
          <Redirect from="*" to="/404"/>
        </Switch>        
      </Provider>
    </Router>
  );
}

export { App, Consumer as AppConsumer, AppContext};

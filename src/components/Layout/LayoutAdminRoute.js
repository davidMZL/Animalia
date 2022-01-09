import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import LayoutHF from './LayoutHF'


const LayoutAdminRoute = ({component: Component, ...rest}) => {
    // console.log(rest)
    return ( 
        <>
            {(rest.authState && rest.userFromDB.roles == "admin") ? 
            <Route {...rest} render={props => (
                <LayoutHF authState={rest.authState}>
                    <Component {...props}/>
                </LayoutHF>
            )}/>
            : <Redirect to="/"/>}
        
        </>
    );
}
 
export default LayoutAdminRoute;
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import LayoutHF from './LayoutHF'


const LayoutPrincipalRoute = ({component: Component, ...rest}) => {
    // console.log(rest)
    return ( 
        <Route {...rest} render={props => (
            <LayoutHF authState={rest.authState}>
                <Component {...props}/>
            </LayoutHF>
        )}/>
    );
}
 
export default LayoutPrincipalRoute;
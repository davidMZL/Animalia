import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

const LayoutOutAuth = ({component: Component, ...rest}) => {
    // console.log(rest)
    return (
        <> 
            {!rest.authState ?
                <Route {...rest} render={props => (
                    <Component {...props}/> 
                )}/>
            : <Redirect to="/"/>}
        </>
    );
}
 
export default LayoutOutAuth;
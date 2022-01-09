import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const LayoutHF = ({children, authState}) => {
    return ( 
        <>
            <Header authState={authState}/>
                {children}
            <Footer/>
        </>
    );
}
 
export default LayoutHF;
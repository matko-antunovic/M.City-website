import React from 'react'
import Header from "../Layout/Header"
import Footer from "../Layout/Footer"


const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout

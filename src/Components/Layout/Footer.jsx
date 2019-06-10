import React from 'react'

import CityLogo from "../UI/CityLogo"

const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
            <CityLogo link={true} linkTo="/" height="70px" width="70px" />
            </div>
        <div className="footer_discl">
        Manchester City 2019.All rights reserved
        </div>
        </footer>
    )
}

export default Footer

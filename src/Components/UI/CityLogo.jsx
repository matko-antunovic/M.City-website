import React from 'react'
import {Link} from "react-router-dom"
import citylogo from "../../../src/logo.png";

const CityLogo = ({ link, linkTo, width, height }) => {
  const logo = (
    <div
    className="img_cover"
      style={{
        width: width,
        height: height,
        background:`url(${citylogo}) no-repeat`
      }}
    >
    </div>
  );

  if (link) {
    return (
      <Link to={linkTo} className="link_logo">
        {logo}
      </Link>
    );
  } else {
    return logo;
  }
};

export default CityLogo;

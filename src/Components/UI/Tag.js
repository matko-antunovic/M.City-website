import React from 'react'
import {Link} from "react-router-dom"

const Tag = ({link,linkTo,bck,size,color,children,add}) => {

    const template=<div
    style={{
        background:bck,
        fontSize:size,
        color:color,
        padding:"5px 10px",
        display:"inline-block",
        fontFamily:"Righteous",
        ...add
    }}
    >{children}</div>

    if(link){
        return (
            <Link to={linkTo}>
            {template}
            </Link>
        )
    }else{
        return template;
    }

}

export default Tag

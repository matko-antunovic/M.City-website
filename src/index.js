import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css"
import RouterApp from './RouterApp';
import {BrowserRouter} from "react-router-dom"
import "./firebase"

const App=()=>{
    return(
        <BrowserRouter>
        <RouterApp/>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

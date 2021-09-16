import React, {useState} from 'react'
import Header from './Header'
import Routes from './Routes'
import {HashRouter, useLocation} from "react-router-dom";


function HW5() {

    return (
        <div>
            <HashRouter >
            <Routes/>
            </HashRouter>
        </div>
    )
}

export default HW5

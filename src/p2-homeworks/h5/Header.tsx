import React from 'react'
import {NavLink, Switch} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Route.module.css'

function Header() {

    const style = {
        textDecoration: 'none',
        color: 'inherit'
    }

    const activeNavLink = {
        background: '-webkit-linear-gradient(#11998e, #38ef7d)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        'border-bottom': '1px solid #38ef7d',
    }

    return (
        <div className={s.Wrap}>
            <ul className={s.navlinks}>
                <li><NavLink style={style} activeStyle={activeNavLink} to={PATH.PRE_JUNIOR}>Pre Junior</NavLink></li>
                <li><NavLink style={style} activeStyle={activeNavLink} to={PATH.JUNIOR}>Junior</NavLink></li>
                <li><NavLink style={style} activeStyle={activeNavLink} to={PATH.JUNIOR_PLUS}>Junior +</NavLink></li>
            </ul>
            <div className={s.navigationItem}>Navigation</div>
        </div>
    )
}

export default Header

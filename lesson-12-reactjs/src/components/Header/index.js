import React from 'react'

import './style.css'
import { NavLink } from 'react-router-dom'

import { SIGN_IN, SIGN_UP, HOME, POSTS } from '../../constants/global'

const Header = () => (
    <div className="header">
        <p className="header__label">Header</p>
        <div className="header__menu">
            <ul>
                <li><NavLink to="/home" className="header__link" activeClassName="header__link--actived">{HOME}</NavLink></li>
                <li><NavLink to="/sign-in" className="header__link" activeClassName="header__link--actived">{SIGN_IN}</NavLink></li>
                <li><NavLink to="/sign-up" className="header__link" activeClassName="header__link--actived">{SIGN_UP}</NavLink></li>
                <li><NavLink to="/posts" className="header__link" activeClassName="header__link--actived">{POSTS}</NavLink></li>
            </ul>
        </div>
    </div>
)

export default Header
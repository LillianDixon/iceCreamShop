import React from 'react'
import { NavLink } from "react-router-dom"

export default function() {
    return (
        <div className="nav-wrapper">
            <div className='navlink'>
                <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>  
            </div>
            <div className='navlink'>
                <NavLink to="/menu" activeClassName="nav-link-active">Menu</NavLink>
            </div>
            <div className='navlink'>
                <NavLink to="/history" activeClassName="nav-link-active">History</NavLink>  
            </div>
            <div className='navlink'>
                <NavLink to="/catering" activeClassName="nav-link-active">Catering</NavLink>
            </div>
        </div>
    )
}
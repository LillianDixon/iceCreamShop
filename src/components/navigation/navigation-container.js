import React from 'react'
import { NavLink } from "react-router-dom"

export default function() {
    return (
        <div>
            <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
            <NavLink to="/menu" activeClassName="nav-link-active">Menu</NavLink>
            <NavLink to="/history" activeClassName="nav-link-active">History</NavLink>
            <NavLink to="/catering" activeClassName="nav-link-active">Catering</NavLink>
        </div>
    )
}
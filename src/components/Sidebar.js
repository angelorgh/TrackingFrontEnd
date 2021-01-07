import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
    <div className="sidebar">
        <div className="sidebar-wrapper">
            <div className="logo">
                <Link to='/' className="simple-text">
                    Tracking App
                </Link>
            </div>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/dashboard'>
                        <i className="nc-icon nc-char-pie-35"></i>
                        <p>Tablero Admin</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/orderhistory'>
                        <i className=""></i>
                        <p>Historial de Ordenes</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/profile'>
                        <i className=""></i>
                        <p>User Profile</p>
                    </NavLink>
                </li>

            </ul>
        </div>
    </div>
    )
  }
}

export default Sidebar
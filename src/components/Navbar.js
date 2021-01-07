import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg " color-on-onscroll="500">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Tracking de Ordenes</a>
                <div className="collapse navbar-collapse justify-content-end" id="navigation">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <span className="no-icon">Cerrar Sesión</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
  }
}

export default Navbar
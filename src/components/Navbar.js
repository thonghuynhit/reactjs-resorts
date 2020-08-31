import React from 'react'
import Logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
    state = {
        isOpen: false,

    }
    constructor(props) {
        super(props)

    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <NavLink to="/">
                            <img src={Logo} alt="Resorts" />
                        </NavLink>
                        <button type="button" onClick={ this.handleToggle } className="nav-btn">
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={ this.state.isOpen ? "nav-links show-nav" : "nav-links" }>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/rooms/">Rooms</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar
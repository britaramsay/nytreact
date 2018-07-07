import React, {Component} from "react";
import '../App.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render () {
        return (<div>
            <nav className="navbar">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/" id="homeLink"><h4>Home</h4></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/saved" id="savedLink"><h4>Saved</h4></Link>
                    </li>
                </ul>
            </nav>
        </div>)
    }
}

export default Nav; 
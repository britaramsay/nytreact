import React, { Component } from "react";
import '../App.css';
import Nav from './Nav.js';

class Jumbotron extends Component {

    render () {  
        return(
            <div className="jumbotron">
                <h1>New York Times</h1>
                <h3>Article Search</h3>
            </div>
        )
    }
}

export default Jumbotron; 
import React, { Component } from 'react';
// import {
//   Button,
//   Navbar,
//   Collapse,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   Container,
//   Row,
//   Col,
//   Jumbotron
// } from 'reactstrap';

import Header from './Header';
// import Navbar from './Navbar';
import Roster from './Roster';

class App extends Component {
    render() {
        return (
            <div>
                <Header tagline="Because Soccer Does Matter" />
                <div className="row">
                    <div className="col">
                        <Roster/>
                    </div>
                    <div className="col-6">
                        2 of 3 (wider)
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

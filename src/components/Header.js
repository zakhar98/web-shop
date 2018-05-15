import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import CartComponent from './Cart.component';
// import { Nav, NavItem, Navbar, NavDropdown } from 'react-bootstrap';
// import IconMenu from 'material-ui/IconMenu';
// import IconButton from 'material-ui/IconButton';
// import FontIcon from 'material-ui/FontIcon';
// import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
// import MenuItem from 'material-ui/MenuItem';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
// import Toggle from 'material-ui/Toggle';




// Header component
class HeaderComponent extends React.Component {


    render() {

        return (
            <Toolbar>
                <ToolbarTitle className="" text="Web shop" />
            </Toolbar>
        );
    }

}

export default HeaderComponent;
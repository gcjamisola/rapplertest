import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavContainer, NavItem } from '../../styles';

class Header extends Component {
    render() {
        return (
            <div>
                <NavContainer>
                    <NavItem>Home</NavItem>
                    <NavItem>About</NavItem>
                    <NavItem>Gallery</NavItem>
                    <NavItem>Contact Us</NavItem>
                </NavContainer>
            </div>
        );
    }
}

export default Header;
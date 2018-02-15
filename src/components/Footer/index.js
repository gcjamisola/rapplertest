import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Footer as FooterSC } from '../../styles';

class Footer extends Component {
    render() {
        return (
            <FooterSC>
                Copyright 2018
            </FooterSC>
        );
    }
}

export default Footer;
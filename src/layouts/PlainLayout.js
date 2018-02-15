import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Wrapper } from '../styles';

class PlainLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper>
                <Header/>
                { this.props.children }
                <Footer/>
            </Wrapper>
        )
    }
}

PlainLayout.propTypes = {
    children: PropTypes.node
}

export {PlainLayout};
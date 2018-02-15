require('./index.config');

import React, { Component } from 'react';
import { render } from 'react-dom';

import _ from 'lodash';

import Carousel from './components/Carousel';
import { Wrapper } from './styles/styled-components';

class App extends Component {
    constructor(props) {
        super(props);

        this._getStories = this._getStories.bind(this);

        this.state = {
            settings: {
                arrows: true,
                dots: !window.isMobile,
                infinite: true,
                speed: 500,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: 'linear',
                centerMode: true,
                autoplay: false,
                autoplaySpeed: 10000,
                swipeToSlide: window.isMobile,
                centerPadding: '0px'
            },
            stories: []
        }
    }

    _getStories() {
        return fetch('https://svc.rappler.com/p/topstories')
        .then((response) => response.json())
        .then((response) => {
            let tmpArr = [];

            const destructureObj = (obj) => {
                const image =  _.pick(_.head(_.pick(obj, ['images']).images), 'full')
                
                return _.assign(_.pick(obj, ['title','metadesc']), image);
            };

            _.forIn(response.data, (elem) => {
                tmpArr.push(destructureObj(elem));
            });

            this.setState({ stories: tmpArr });
        })
    }

    componentDidMount() {
        this._getStories();
    }

    render() {
        const {
            settings,
            stories
        } = this.state;

        return (
            <Wrapper>
                <Carousel settings={settings} stories={stories}/>
            </Wrapper>
        );
    }
}

render(
    <App/>, 
    document.getElementById('root')
);
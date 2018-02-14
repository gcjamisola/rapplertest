require('./index.config');
import './styles/style.scss'

import React, { Component } from 'react';
import { render } from 'react-dom';

import _ from 'lodash';

import Carousel from './components/Carousel';
import { Wrapper } from './styles/styled-components';

class App extends Component {
    constructor(props) {
        super(props);

        this.getStories = this.getStories.bind(this);

        this.state = {
            settings: {
                arrows: !window.isMobile,
                dots: !window.isMobile,
                infinite: true,
                speed: 500,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: 'linear',
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 10000,
                swipeToSlide: window.isMobile
            },
            stories: []
        }
    }

    getStories() {
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
        this.getStories();
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
require('./index.config');

import React, { Component } from 'react';
import { render } from 'react-dom';

import _ from 'lodash';

import { PlainLayout } from './layouts';

import Carousel from './components/Carousel';
import { rGetStories } from './resources/stories';

class App extends Component {
    constructor(props) {
        super(props);

        this._getStories = this._getStories.bind(this);

        this.state = {
            settings: {
                arrows: true,
                autoplay: false,
                autoplaySpeed: 10000,
                centerMode: true,
                centerPadding: '0px',
                cssEase: 'linear',
                dots: !window.isMobile,
                fade: true,
                infinite: true,
                slidesToScroll: 1,
                slidesToShow: 1,
                speed: 500,
                swipeToSlide: window.isMobile,
            },
            stories: []
        }
    }

    _getStories() {
        return rGetStories().then((response) => {
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
            <PlainLayout>
                <Carousel settings={settings} stories={stories}/>
            </PlainLayout>
        );
    }
}

render(
    <App/>, 
    document.getElementById('root')
);
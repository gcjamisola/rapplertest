import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';

import { 
  CarouselContainer, 
  ReadMore,
  StyledSlider,
  SliderElement, 
  SliderImage, 
  SliderTitle, 
  SliderDescription 
} from '../../styles';

class Carousel extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      storyArray: []
    }

    this._sliderElement = this._sliderElement.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.stories !== nextProps.stories) {
      this.setState({ storyArray: nextProps.stories});
    }
  }

  _sliderElement(arr) {
    return arr.map((value, key) => {
      const { 
        full: imgUrl, 
        title, 
        metadesc: storyDesc } = value;

      return (
        <div key={key}>
          <SliderImage src={`${imgUrl}`} />
          <SliderElement>
            <SliderTitle>{`${title}`}</SliderTitle>
            <SliderDescription>{`${storyDesc}`}</SliderDescription>
            <ReadMore>> Read More...</ReadMore>
          </SliderElement>
        </div>
      );
    })
  }

  render() {
    const { settings } = this.props;
    const { storyArray } = this.state;

    return (
      <CarouselContainer>
        <StyledSlider>
            <Slider {...settings}>
              { this._sliderElement(storyArray)  }
            </Slider>
        </StyledSlider>
      </CarouselContainer>
    );
  }
}

Carousel.propTypes = {
  setting: PropTypes.object,
  stories: PropTypes.array
}

export default Carousel;
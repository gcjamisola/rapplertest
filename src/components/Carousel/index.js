import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';

import { 
  CarouselContainer, 
  StyledSlider,
  SliderElement, 
  SliderImage, 
  SliderTitle, 
  SliderDescription 
} from '../../styles/styled-components';

class Carousel extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      storyArray: []
    }

    this.sliderElement = this.sliderElement.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.stories !== nextProps.stories) {
      this.setState({ storyArray: nextProps.stories});
    }
  }

  sliderElement(arr) {
    return arr.map((value, key) => {
      return (
        <div key={key}>
          <SliderImage src={`${value.full}`} />
          <SliderElement>
            <SliderTitle>{`${value.title}`}</SliderTitle>
            <SliderDescription>{`${value.metadesc}`}</SliderDescription>
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
          {
            this.sliderElement(storyArray)
          }
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
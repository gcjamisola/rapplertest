import styled from 'styled-components';

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 376
}

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
    return acc
  }, {})

const StyledSlider = styled.div`
    .slick-initialized.slick-slider {
        height: 550px;
    }
`;

const CarouselContainer = styled.div`
    background: #419be0;
    color: #333;
    height: 575px;
    margin: 0 auto;
    padding: 40px;
    width: 100%;
`;

const SliderElement = styled.div`
    background-color: rgba(255, 255, 255, .25);
    color: black;
    height: 150px;
    position: relative;
    top: -10em;
    width: 100%;
`;

const SliderImage = styled.img`
    height: 550px;
    width: 100%;
`;

const SliderText = styled.div`
    color: #000;
    left: 1em;
    position: relative;
    width: 95%;
`;

const SliderTitle = SliderText.extend`
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
    top: 1em;
`;

const SliderDescription = SliderText.extend`
    bottom: -5em;
    margin-left: .5em;
`;

export { 
    CarouselContainer, 
    StyledSlider, 
    SliderElement, 
    SliderImage, 
    SliderTitle, 
    SliderDescription
 };
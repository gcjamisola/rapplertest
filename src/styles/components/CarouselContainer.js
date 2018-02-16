import styled, { injectGlobal } from 'styled-components';
import * as utils from '../utils';

const { media } = utils;

const CarouselContainer = styled.div`
    background: #419be0;
    color: #333;
    height: 475px;
    margin: 0 auto;
    padding: 40px;

    ${media.desktop`width: 88%;`}
    ${media.tablet`
        height: 350px;
        width: 100%;
    `}
    ${media.phone`height: 300px;`}
`;

const StyledSlider = styled.div`
    .slick-initialized.slick-slider {
        height: 450px;
    }

    ${media.tablet`height: 400px;`}
    ${media.phablet`height: 375px;`}
    ${media.phone`height: 300px`}
`;

const SliderElement = styled.div`
    background-color: rgba(255, 255, 255, .25);
    color: black;
    height: 150px;
    position: relative;
    top: -10em;
    width: 100%;

    ${media.phablet`
        height: 100px;
        top: -7em;
    `}
`;

const SliderImage = styled.img`
    height: 450px;
    width: 100%;

    ${media.desktop`height: 400px;`}
    ${media.tablet`height: 350px`}
    ${media.phablet`height: 300px`}
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

    ${media.phablet`
        font-size: 1.25em;
    `}
`;

const SliderDescription = SliderText.extend`
    bottom: -5em;
    margin-left: .5em;

    ${media.phablet`
        display: none;
    `}
`;

const ReadMore = styled.div`
    bottom: 1em;
    color: rgba(44, 44, 44, 0.75);
    display: none;
    font-weight: bold;
    position: absolute;
    right: 1em;

    ${media.phablet`
        display: block;
    `}
`;

export { 
    CarouselContainer, 
    ReadMore,
    StyledSlider,
    SliderElement, 
    SliderImage, 
    SliderTitle, 
    SliderDescription
 };
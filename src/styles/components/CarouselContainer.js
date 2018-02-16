import styled, { injectGlobal } from 'styled-components';
import * as utils from '../utils';

const { media } = utils;

const CarouselContainer = styled.div`
    background: #419be0;
    color: #333;
    height: 450px;
    margin: 0 auto;
    padding: 40px;

		${media.desktop`height: 410px;`}
		${media.tablet`height: 350px;`}
		${media.phablet`height: 310px;`}
    ${media.phone`height: 300px;`}
`;

const StyledSlider = styled.div`
    .slick-initialized.slick-slider {
				height: 450px;
				${media.desktop`height: 410px;`}
				${media.tablet`height: 360px;`}
				${media.phablet`height: 305px;`}
				${media.phone`height: 325px`}
    }
`;

const SliderElement = styled.div`
    background-color: rgba(255, 255, 255, .25);
		color: black;
		display: flex;
    flex-direction: column;
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
    display: flex;
    align-items: center;
    justify-content: left;
    flex: 1;
    margin-left: 1em;
`;

const SliderTitle = SliderText.extend`
    font-size: 1.5em;
    font-weight: bold;

    ${media.phablet`font-size: 1em;`}
`;

const SliderDescription = SliderText.extend`
    ${media.phablet`display: none;`}
`;

const ReadMore = styled.div`
    color: rgba(44, 44, 44, 0.75);
    display: none;
    font-weight: bold;

    ${media.phablet`
			align-items: center;
			display: flex;
			flex: 1;
			justify-content: right;
			margin-left: auto;
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

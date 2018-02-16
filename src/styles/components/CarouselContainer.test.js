import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import * as scCarousel from './CarouselContainer';

test('it works', () => {
  let tree = renderer.create(<scCarousel.CarouselContainer />).toJSON()
	expect(tree).toMatchSnapshot()

	tree = renderer.create(<scCarousel.ReadMore />).toJSON()
	expect(tree).toMatchSnapshot()

	tree = renderer.create(<scCarousel.StyledSlider />).toJSON()
	expect(tree).toMatchSnapshot()

	tree = renderer.create(<scCarousel.SliderElement />).toJSON()
	expect(tree).toMatchSnapshot()

	tree = renderer.create(<scCarousel.SliderImage />).toJSON()
	expect(tree).toMatchSnapshot()

	tree = renderer.create(<scCarousel.SliderTitle />).toJSON()
	expect(tree).toMatchSnapshot()

	tree = renderer.create(<scCarousel.SliderDescription />).toJSON()
  expect(tree).toMatchSnapshot()
})

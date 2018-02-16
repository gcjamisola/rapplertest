import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import * as scHeader from './Header';

test('it works', () => {
  let tree = renderer.create(<scHeader.NavContainer />).toJSON()
	expect(tree).toMatchSnapshot()

	tree = renderer.create(<scHeader.NavItem />).toJSON()
  expect(tree).toMatchSnapshot()
})

import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import {Wrapper} from './Wrapper';

test('it works', () => {
  const tree = renderer.create(<Wrapper />).toJSON()
  expect(tree).toMatchSnapshot()
})

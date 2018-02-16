import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Carousel from './index';

describe('<Carousel/>', () => {
    it('renders <Carousel/> component', () => {
        const component = shallow(<Carousel/>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });
});

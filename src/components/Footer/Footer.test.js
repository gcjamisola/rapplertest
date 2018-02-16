import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Footer from './index';

describe('<Footer/>', () => {
    it('renders <Footer/> component', () => {
        const component = shallow(<Footer/>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    })
})
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Header from './index';

describe('<Header/>', () => {
    it('renders <Header/> component', () => {
        const component = shallow(<Header/>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    })
})
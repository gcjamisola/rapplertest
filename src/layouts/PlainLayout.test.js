import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { PlainLayout } from './PlainLayout';

describe('<PlainLayout/>', () => {
    it('renders <PlainLayout/> component', () => {
        const component = shallow(<PlainLayout/>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });
});

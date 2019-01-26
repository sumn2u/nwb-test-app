import React from 'react';
import Home  from '../index';
import {
    shallow,
    mount,
    render
} from 'enzyme';

describe('Home Component', () => {
    it('should render correctly the home component', () => {
        const component = shallow( < Home / > );
        expect(component).toMatchSnapshot();
    });
});


describe('test', () => {
    it('should work', () => {
        const wrapper = shallow( < Home txt = "is working" / > );
    });
});
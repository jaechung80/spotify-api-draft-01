import React from 'react';
import { DisplayResults } from '../src/components/DisplayResults';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('DisplayResults component', () => {
  const wrapper = shallow(<DisplayResults />);

  it('renders DisplayResults component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

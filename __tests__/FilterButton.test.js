import React from 'react';
import FilterButton from '../src/components/FilterButton';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('FilterButton component', () => {
  const mockClick = jest.fn();

  const wrapper = shallow(<FilterButton onClick={mockClick} />);

  it('calls the function to change the filter when clicked', () => {
    wrapper.simulate('click');
    expect(mockClick).toHaveBeenCalled();
  });
});

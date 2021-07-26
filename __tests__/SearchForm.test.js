import React from 'react';
import { SearchForm } from '../src/components/SearchForm';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('SearchForm component', () => {
  it('renders SearchForm component correctly', () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('SearchForm search field', () => {
  const wrapper = shallow(<SearchForm />);

  it('renders the text input box', () => {
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('starts out as an empty string', () => {
    expect(wrapper.find('input').prop('value')).toEqual('');
  });

  it('should have proper props for text input field', () => {
    expect(wrapper.find('input').props()).toEqual({
      id: 'search',
      name: 'search',
      onChange: expect.any(Function),
      type: 'text',
      value: '',
    });
  });

  it('should set the search field value on change event', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value: 'amy',
      },
    });
    expect(wrapper.find('input').prop('value')).toEqual('amy');
  });
});

describe('SearchForm submit button', () => {
  let wrapper;
  let mockSubmit;

  beforeEach(() => {
    mockSubmit = jest.fn();
    wrapper = shallow(<SearchForm handleSearch={mockSubmit} />);
  });

  it('renders the submit button correctly', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('submits the search when clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockSubmit).toHaveBeenCalled();
  });
});

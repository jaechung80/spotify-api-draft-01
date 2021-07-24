import React from 'react';
import renderer from 'react-test-renderer';
import SearchForm from '../src/components/SearchForm';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
  it('should render the SearchForm', () => {
    const component = shallow(<SearchForm />);
    expect(component.getElements()).toMatchSnapshot();
  });
});

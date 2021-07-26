import React from 'react';
import ArtistsList from '../src/components/ArtistsList';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('ArtistsList component', () => {
  const wrapper = shallow(<ArtistsList />);

  it('renders ArtistsList component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

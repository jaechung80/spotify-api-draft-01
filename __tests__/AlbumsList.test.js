import React from 'react';
import AlbumsList from '../src/components/AlbumsList';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('AlbumsList component', () => {
  const wrapper = shallow(<AlbumsList />);

  it('renders AlbumsList component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

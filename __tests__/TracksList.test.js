import React from 'react';
import TracksList from '../src/components/TracksList';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('TracksList component', () => {
  const wrapper = shallow(<TracksList />);

  it('renders TracksList component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

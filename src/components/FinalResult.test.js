import React from 'react';
import { shallow } from 'enzyme';
import FinalResult from './FinalResult';
import './../../helpers/enzyme_setup';

describe('<FinalResult />', () => {
  it('renders the final result', () => {
    const result = shallow(<FinalResult />);
    expect(result.find('div').length).toEqual(1);
  });
});

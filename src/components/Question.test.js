import React from 'react';
import { shallow } from 'enzyme';
import Question from './Question';
import './../../helpers/enzyme_setup';

describe('<Question />', () => {
  it('renders a question', () => {
    const que = shallow(<Question />);
    expect(que.find('h2.question').length).toEqual(1);
  });
});

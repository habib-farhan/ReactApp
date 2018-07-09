import React from 'react';
import { shallow } from 'enzyme';
import AnswerOptions from './AnswerOptions';
import './../../helpers/enzyme_setup';

describe('<AnswerOptions />', () => {
  it('renders an answer option', () => {
    const answer = shallow(<AnswerOptions />);
    expect(answer.find('li').length).toEqual(1);
  });
});

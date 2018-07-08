import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function FinalResult(props) {

  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        You answered <strong> {props.quizResult} </strong> out of 8 questions correctly !
      </div>
      <a href="http://localhost:3000/">Take the test again</a>
  </ReactCSSTransitionGroup>
  );

}

FinalResult.propTypes = {
  quizResult: PropTypes.number.isRequired,
};

export default FinalResult;

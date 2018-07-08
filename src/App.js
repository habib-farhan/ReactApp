import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react-addons-update';
import multiChoiceQuestions from './api/multiChoiceQuestions';
import Quiz from './components/Quiz';
import Result from './components/FinalResult';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      correctAnswers: 0,
      result: false,
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const ansOptions = multiChoiceQuestions.map((question) => question.answers);
    this.setState({
      question: multiChoiceQuestions[0].question,
      answerOptions: ansOptions[0]
    });
  }


  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.id);

    if (event.currentTarget.value === multiChoiceQuestions[this.state.questionId - 1].correct) {
      this.setCorrectAnswer();
    }
    if (this.state.questionId < multiChoiceQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
    } else {
        setTimeout(() => this.setResults(), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState({
        answer: answer
    });
  }

  setCorrectAnswer() {
    const correctCounter = this.state.correctAnswers + 1;
    this.setState({
        correctAnswers: correctCounter
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: multiChoiceQuestions[counter].question,
        answerOptions: multiChoiceQuestions[counter].answers,
        answer: ''
    });
  }


  setResults(result) {

    this.setState({ result: true });

  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={multiChoiceQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.correctAnswers} />
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>World Cup 2018 Quiz</h2>
        </div>

        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }

}

export default App;

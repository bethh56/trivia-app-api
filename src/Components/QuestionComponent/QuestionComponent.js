import React from 'react';

const shuffle = require('shuffle-array');

class QuestionComponent extends React.Component {
  state = {
    answers: [],
  }

  getTriviaAnswers = () => {
    const { answers } = this.state;
    const { question } = this.props;
    question.incorrect_answers.forEach((answer) => {
      answers.push(answer);
    });
    answers.push(question.correct_answer);
    // using npm package to randomize answers
    shuffle(answers);
    // console.error('answers shuffled?', answers);
    this.setState({ answers });
  }

  componentDidMount() {
    this.getTriviaAnswers();
  }

  render() {
    const { question } = this.props;
    const { answers } = this.state;
    return (
      <div>
        <h1> Question Component</h1>
        <h1>{question.category}</h1>
        <p>{question.question}</p>
          {answers.map((a) => (<button>{a}</button>))}
      </div>
    );
  }
}

export default QuestionComponent;

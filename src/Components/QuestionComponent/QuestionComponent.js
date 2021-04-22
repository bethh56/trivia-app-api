import React from 'react';

const shuffle = require('shuffle-array');

class QuestionComponent extends React.Component {
  state = {
    answers: [],
    correctAnswer: 0,
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

  selectAnswer = (e) => {
    const { question } = this.props;
    const { correctAnswer } = this.state;
    if (e.target.value === question.correct_answer) {
      console.log(`correct answer is ${question.correct_answer}`);
    }
    //     this.setState({  correctAnswer + 1 });
    // } else this.setState({  correctAnswer === 1 });
    // );
  };

  render() {
    const { question } = this.props;
    const { answers, correctAnswer } = this.state;

    return (
      <div>
        <h1>Correct Answers = {correctAnswer}</h1>
        <h1>{question.category}</h1>
        <p>{question.question}</p>
          {answers.map((a) => (<button className='btn btn-primary' onClick={this.selectAnswer} value={a}>{a}</button>))}
      </div>
    );
  }
}

export default QuestionComponent;

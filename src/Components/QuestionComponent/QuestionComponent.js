import React from 'react';

const shuffle = require('shuffle-array');

class QuestionComponent extends React.Component {
  state = {
    answers: [],
  }

  //   category: "Entertainment: Music"
  // correct_answer: "Humanz"
  // difficulty: "medium"
  // incorrect_answers: (3) ["Plastic Beach", "The Fall", "Demon Days"]
  // question: "What album did Gorillaz release in 2017?"
  // type: "multiple"

  // get questions
  // select both correct_answer and incorrect_answers
  // push incorrect_answers into a new array called answerOptions
  // push correct_answer into answerOptions
  // somehow randomize these

  getTriviaAnswers = () => {
    const { answers } = this.state;
    const { question } = this.props;
    question.incorrect_answers.forEach((answer) => {
      answers.push(answer);
    });
    answers.push(question.correct_answer);
    shuffle(answers);
    console.error('answers shuffled?', answers);
    this.setState({ answers });
  }

  componentDidMount() {
    this.getTriviaAnswers();
  }

  render() {
    const { question } = this.props;
    const { answers } = this.state;

    console.error('question from q component', question);
    return (
      <div>
        <h1> Question Component</h1>
        <h1>{question.category}</h1>
        <p>{question.question}</p>
        <p>{answers}</p>
      </div>
    );
  }
}

export default QuestionComponent;

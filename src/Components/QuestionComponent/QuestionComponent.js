import React from 'react';
import trivia from '../../helpers/data/triviaData';

class QuestionComponent extends React.Component {
  state = {
    answers: [],
  }

  createAnswersArray = () => {
    const { question } = this.props;
    const { answers } = this.state;
    answers.push(question.correct_answer);
  }

  render() {
    const { question } = this.props;
    const { answers } = this.state;
    console.error('answers', answers);
    console.error('question from q component', question);
    return (
      <div>
        <h1> Question Component</h1>
        <h1>{question.category}</h1>
      </div>
    );
  }
}

export default QuestionComponent;

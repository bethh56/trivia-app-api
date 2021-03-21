import React from 'react';
import trivia from '../../helpers/data/triviaData';

class QuestionComponent extends React.Component {
  state = {
    questions: [],
  }

  getTriviaQuestions = () => {
    trivia.getTrivia()
      .then((questions) => this.setState({ questions }))
      .catch((err) => console.error('unable to get trivia questions'));
  }

  componentDidMount() {
    this.getTriviaQuestions();
  }

  render() {
    const { questions } = this.state;
    console.error('questions', questions);
    return (
      <div>
        <h1> Question Component</h1>
      </div>
    );
  }
}

export default QuestionComponent;

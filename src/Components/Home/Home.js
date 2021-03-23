import React from 'react';
import trivia from '../../helpers/data/triviaData';
import QuestionComponent from '../QuestionComponent/QuestionComponent';

class Home extends React.Component {
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
    const displayQuestion = questions.map((question) => <QuestionComponent question={question}/>);
    return (
      <div>
        <h1> Home </h1>
        {displayQuestion}
      </div>
    );
  }
}

export default Home;

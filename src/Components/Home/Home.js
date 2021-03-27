import React from 'react';
import trivia from '../../helpers/data/triviaData';
import QuestionComponent from '../QuestionComponent/QuestionComponent';

class Home extends React.Component {
  state = {
    questions: [],
    answers: [],
  }

  getTriviaQuestions = () => {
    trivia.getTriviaQuestion()
      .then((questions) => this.setState({ questions }))
      .catch((err) => console.error('unable to get trivia questions'));
  }

  // get questions
  // select both correct_answer and incorrect_answers
  // push incorrect_answers into a new array called answerOptions
  // push correct_answer into answerOptions
  // somehow randomize these

  getTriviaAnswers = () => {
    const { questions, answers } = this.state;
    questions.map((q) => q={answers});
    answers.push(q.correct_answer, q.incorrect_answers);
    console.error(answers);
  }

  componentDidMount() {
    this.getTriviaQuestions();
    // this.getTriviaAnswers();
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

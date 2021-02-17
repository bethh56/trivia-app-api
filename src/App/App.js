import React from 'react';
import triviaData from '../helpers/data/trivia';
import './App.scss';

class App extends React.Component {
  state = {
    questions: [],
  }

  getTriviaQuestions = () => {
    triviaData.getTrivia()
      .then((questions) => this.setState({ questions }))
      .catch((err) => console.error('unable to get trivia questions'));
  }

  componentDidMount() {
    this.getTriviaQuestions();
  }

  render() {
    const { questions } = this.state;
    console.error(questions);
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info">I am a button</button>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';
import QuestionComponent from '../Components/QuestionComponent/QuestionComponent';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info">I am a button</button>
        <QuestionComponent/>
      </div>
    );
  }
}

export default App;

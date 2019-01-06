import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TalolanEncounter from './TalolanEncounter';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfResultsInput: 0,
      holdResultNumber: 0
    }
  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateResultsNumber = this.updateResultsNumber.bind(this);
  }

  updateResultsNumber(e){
    this.setState({numberOfResultsInput: 0})
    this.setState({holdResultNumber: e.target.value})
  }

  handleSubmit(e){
      if (e.key === 'Enter') {
        this.setState({numberOfResultsInput: e.target.value})
      }else if(e.target.id === "submit"){
        this.setState({numberOfResultsInput: this.state.holdResultNumber})
      }
      
    }
  

  render() {

    return (
      <div>
        <header>
        <h2>Game Randomizer</h2>
        </header>
        <h3>Enter number of results to return</h3>
          <div>
            <input name="numberOfResults" onKeyPress={this.handleSubmit} onBlur={ event => this.updateResultsNumber(event)} ></input>
            <button id="submit" onClick={this.handleSubmit}>Submit</button>
           
            <div>
              <TalolanEncounter results={this.state.numberOfResultsInput} />
            </div>

          </div>
      </div>
    );
  }
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));

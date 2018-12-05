import React, { Component } from 'react';
import './App.css';
import customData from './customData.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      siteType: customData.siteType, 
      salvageState: customData.salvageState,
      numberOfResultsInput: 0,
      displayResults: [
        "Results will show here"
      ]
    }
    this.genResults = this.genResults.bind(this);
    this.numberResultsReturned = this.numberResultsReturned.bind(this);
  }

  genResults(e){
    console.log("inside genResults")
    this.setState({
      displayResults: []
    })
    let addResult
    for(let i=0; i < this.state.numberOfResultsInput; i++){
      let siteTypeRandom = Math.floor(Math.random() * this.state.siteType.length);
      let salvageStateRandom = Math.floor(Math.random() * this.state.salvageState.length); 
      let siteTypeResult = this.state.siteType[siteTypeRandom];
      let salvageStateResult = this.state.salvageState[salvageStateRandom];
      addResult = siteTypeResult + " " + salvageStateResult;

      
      
      console.log("end of function")
      // console.log(this.state.displayResults)
    }
    this.setState({ displayResults: [...this.state.displayResults, addResult]})
  }

  numberResultsReturned(e){
    this.setState({numberOfResultsInput: e.target.value});
  }

  render() {
    console.log(this.state.displayResults)
    return (
      <div className="App">
        <header className="App-header">
        <h2>Game Randomizer</h2>
        </header>
        <h3>Enter number of results to return</h3>
          <div>
            <input name="numberOfResults" onChange={this.numberResultsReturned}></input>
            <button onClick={this.genResults}>Submit</button>
            <div>
            <div><h3>Results</h3></div>
            <div>
              {this.state.displayResults.map((result, i) => 
                 <div key={i}> {result} </div>
              )}
            </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

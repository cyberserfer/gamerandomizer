import React, { Component } from 'react';
import './App.css';
import customData from './customData.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayResults: {},

    }
  }

  genResults(e){
    let {siteType, salvageState} = customData;

    for(let i=0; i < e.numberOfResults.value; i++){
      let siteTypeReturn = Math.random() * siteType.length;
      let salvageStateReturn = Math.random() * salvageState.length;
      
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2>Game Randomizer</h2>
        </header>
        <h3>Enter number of results to return</h3>
          <form>
            <input name="numberOfResults"></input>
            <button onSubmit={this.genResults}>Submit</button>
            <div>
              {this.state.displayResults}
            </div>
          </form>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TalolanEncounter from './TalolanEncounter';
import RandomEncounter from './RandomEncounter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfResults: 0,
      dataType: "",
      submitSwitch: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateEventValue = this.updateEventValue.bind(this);
  }

  updateEventValue(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    if (e.key === 'Enter' || e.target.name === "submit") {
      this.updateEventValue(e)
      this.setState({ submitSwitch: true })
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
          <div>
            <input type="radio" name="dataType" value="TalolanEncounter" onChange={event => this.updateEventValue(event)} />Talolan Encounter
            <br />
            <input type="radio" name="dataType" value="RandomEncounter" checked onChange={event => this.updateEventValue(event)} />Random Encounter
          </div>
          <input name="numberOfResults" onKeyPress={this.handleSubmit} onBlur={event => this.updateEventValue(event)} ></input>
          <button name="submit" onClick={this.handleSubmit}>Submit</button>

          <div>
            <TalolanEncounter results={this.state.numberOfResults} />
            <RandomEncounter results={this.state.numberOfResults} />
          </div>

        </div>
      </div>
    );
  }
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));

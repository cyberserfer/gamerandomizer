import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TalolanEncounter from './TalolanEncounter';
import RandomEncounter from './RandomEncounter';
import Hackathon from './Hackathon';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfResults: 0,
            dataType: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateEventValue = this.updateEventValue.bind(this);
    }

    updateEventValue(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        if (e.key === 'Enter' || e.target.name === "submit") {
            this.updateEventValue(e)
        }
    }


    render() {

        return (
            <div style={{ marginLeft: '25px' }}>
                <header>
                    <h2>Game Randomizer</h2>
                </header>
                <div>
                    <div>Select encounter type:</div>
                    <select name="dataType" onChange={event => this.updateEventValue(event)}>
                        <option value="" checked={(this.state.dataType === '') ? true : false}>Select </option>
                        <option value="Hackathon" checked={(this.state.dataType === 'Hackathon') ? true : false}>Hackathon </option>
                        <option value="TalolanEncounter" checked={(this.state.dataType === 'TalolanEncounter') ? true : false}>Talolan Encounter </option>
                        <option value="RandomEncounter" checked={(this.state.dataType === 'RandomEncounter') ? true : false}>Random Encounter </option>
                    </select>
                    <div>Enter number of results to return</div>
                    <input name="numberOfResults" onKeyPress={this.handleSubmit}></input>
                    <button name="submit" onClick={this.handleSubmit}>Submit</button>

                    <div>
                        {(this.state.dataType === "TalolanEncounter") && <TalolanEncounter results={this.state.numberOfResults} />}
                        {(this.state.dataType === "RandomEncounter") && <RandomEncounter results={this.state.numberOfResults} />}
                        {(this.state.dataType === "Hackathon") && <Hackathon results={this.state.numberOfResults} />}
                    </div>

                </div>
            </div>
        );
    }
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));
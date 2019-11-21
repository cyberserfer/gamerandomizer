import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
        this.setState({ [e.target.name]: e.target.value });

    }

    handleSubmit(e) {
        if (e.key === 'Enter' || e.target.name === "submit") {
            this.updateEventValue(e)
            this.setState({ submitSwitch: true })
        }

    // handleChange = (selectedOption) => {
    //     this.setState({ selectedOption });
    //     }

    }


    render() {

        return (
            <div style={{ marginLeft: '25px' }}>
                <header>
                    <h2>Game Randomizer</h2>
                </header>
                <div>
                    <div>Select encounter type:</div>
                    <select>
                        <option name="dataType" value="TalolanEncounter" onChange={event => this.updateEventValue(event)} checked={(this.state.dataType === 'TalolanEncounter') ? true : false}>Talolan Encounter </option>
            <br />
                        <option name="dataType" value="RandomEncounter"  onChange={event => this.updateEventValue(event)} checked={(this.state.dataType === 'RandomEncounter') ? true : false}>Random Encounter </option>
                    </select>
                    <div>Enter number of results to return</div>
                    <input name="numberOfResults" onKeyPress={this.handleSubmit} onBlur={event => this.updateEventValue(event)} ></input>
                    <button name="submit" onClick={this.handleSubmit}>Submit</button>

                    <div>
                        {(this.state.dataType === "TalolanEncounter") &&  <TalolanEncounter results={this.state.numberOfResults} />}
                        {(this.state.dataType === "RandomEncounter") &&  <RandomEncounter results={this.state.numberOfResults} />}
                    </div>

                </div>
            </div>
        );
    }
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));
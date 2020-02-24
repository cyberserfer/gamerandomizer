import React from 'react';
import { hackathon } from '../customData.json';
const { people } = hackathon;

const Hackathon = (props) => {

  let displayResults = []
  for (let i = 0; i < props.results; i++) {
    let peopleRandom = Math.floor(Math.random() * people.length);
    let peopleResult = people[peopleRandom];
    displayResults = [...displayResults, peopleResult];
  }

  return (

    <div>
      {props.results !== 0 ?
        <div>
          <h3>Results</h3>
          <div>
            {displayResults.map((result, i) =>
              <div key={i}> {result} </div>
            )}
          </div>
        </div>
        :
        <div></div>
      }
    </div>
  );

}

export default Hackathon;

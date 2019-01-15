import React from 'react';
import { randomEncounter } from '../customData.json';
const { encounterType, distance } = randomEncounter;

const RandomEncounter = (props) => {

    let displayResults = []
    for (let i = 0; i < props.results; i++) {
        let siteTypeRandom = Math.floor(Math.random() * encounterType.length);
        let distanceRandom = Math.floor(Math.random() * distance.length);
        let encounterTypeResult = encounterType[siteTypeRandom];
        let distanceResult = distance[distanceRandom];
        displayResults = [...displayResults, encounterTypeResult + " " + distanceResult];
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

export default RandomEncounter;

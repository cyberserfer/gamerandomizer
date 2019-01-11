import React from 'react';
import {talolanEncounter} from './customData.json';
const {siteType, salvageState} = talolanEncounter;

const RandomEncounter = (props) => {

    let displayResults = []
    for(let i=0; i < props.results; i++){
      let siteTypeRandom = Math.floor(Math.random() * siteType.length);
      let salvageStateRandom = Math.floor(Math.random() * salvageState.length); 
      let siteTypeResult = siteType[siteTypeRandom];
      let salvageStateResult = salvageState[salvageStateRandom];
      displayResults = [...displayResults, siteTypeResult + " " + salvageStateResult];
    }

    return (
       
            <div>
                { props.results !== 0 ?
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

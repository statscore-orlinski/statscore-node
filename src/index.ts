import { matches } from "./data/matches";    // match data are imported from this file
import { SportEvent } from "./types/SportEvent";  // class that fits imported data entry
import { SportBuilder } from "./types/SportBuilder";  // class that builds Sport-compatible class from SportEvent

/*
DATA FLOW:
1. Input data is converted to compatible SportEvent objects
2. SportEvent is converted with SportBuilder to one of Sport-based classes
3. Sport-based class is changed to generic class in order to get rid of class names to provide comppatible output
*/

let sports = matches.flatMap((se) => {      // mapping every event from date file to fully parsed class
  try {
    return SportBuilder.build(se as SportEvent);  // if we get proper result we build Sport-compatible class from SportEvent
  } catch (e : any) { 
    return [];                                    // if there is any error we skip entry
  }
});

console.log(JSON.parse(JSON.stringify(sports)));  // we log everything without classes names (therefore JSON conversion)
import { Sport } from "./Sport";
import { SportEvent } from "./SportEvent";

// Volleyball class
export class Volleyball extends Sport {
    static _delimiter : string = " - "; // how we delimit participants in match name
    static _sportName : string = "volleyball";  // what is sport name in SportEvent

    constructor(se : SportEvent) {
        super(null);
        if (se.sport == Volleyball._sportName) {    // check if we have really a Volleyball event
            this.name = Sport._createName(se, Volleyball._delimiter);   // use proper delimiter
            this.score = Sport._scoreWithSets(se.score);                // use set-games score string
        } else {
            this.score = this.name = Sport._exceptionString;
            throw new Error("Wrong sport name");                        // throw exception if it is not a Volleyball event
        }
    }
}
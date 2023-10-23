import { Sport } from "./Sport";
import { SportEvent } from "./SportEvent";

// Tennis class
export class Tennis extends Sport {
    static _delimiter : string = " vs "; // how we delimit participants in match name
    static _sportName : string = "tennis"; // what is sport name in SportEvent

    constructor(se : SportEvent) {
        super(null);
        if (se.sport == Tennis._sportName) {    // check if we have really a tennis event
            this.name = Sport._createName(se, Tennis._delimiter);   // use proper delimiter
            this.score = Sport._scoreWithSets(se.score);            // use set-games score string
        } else {
            this.score = this.name = Sport._exceptionString;
            throw new Error("Wrong sport name");                    // throw exception if it is not a tennis event
        }
    }
}
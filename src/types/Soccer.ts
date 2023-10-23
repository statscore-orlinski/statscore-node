import { Sport } from "./Sport";
import { SportEvent } from "./SportEvent";

// Soccer class
export class Soccer extends Sport {
    static _delimiter : string = " - "; // how we delimit participants in match name
    static _sportName : string = "soccer"; // what is sport name in SportEvent

    constructor(se : SportEvent | null) {
        super(null); // required
        if (se != null) {
            if (se.sport === Soccer._sportName) {   // check if we have really a soccer event
                this.name = Sport._createName(se, Soccer._delimiter);   // use proper delimiter
                this.score = se.score;                                  // use soccer-type score string
            } else {
                this.score = this.name = Sport._exceptionString;
                throw new Error("Wrong sport name");                    // throw exception if it is not a soccer event
            }
        }
    }
}
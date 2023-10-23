import { Sport } from "./Sport";
import { SportEvent } from "./SportEvent";

// Handball class
export class Handball extends Sport {
    static _delimiter : string = " vs "; // how we delimit participants in match name
    static _sportName : string = "handball"; // what is sport name in SportEvent

    constructor(se : SportEvent) {
        super(null); // required
        if (se.sport == Handball._sportName) { // check if we have really a handball event
            this.name = Sport._createName(se, Handball._delimiter); // use proper delimiter
            this.score = se.score; // use unchanged score string
        } else {
            this.score = this.name = Sport._exceptionString; 
            throw new Error("Wrong sport name");        // throw exception if it is not a handball event
        }
    }
}
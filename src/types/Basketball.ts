import { Sport } from "./Sport";
import { SportEvent } from "./SportEvent";

// Basketball class
export class Basketball extends Sport {
    static _delimiter : string = " - "; // how we delimit participants in match name
    static _sportName : string = "basketball"; // what is sport name in SportEvent

    static _basketballScore(_score : number[][]) : string { // custom score function used only for basketball
        return `${_score[0][0]},${_score[0][1]},${_score[1][0]},${_score[1][1]}`;
    }

    constructor(se : SportEvent) {
        super(null); // required
        if (se.sport == Basketball._sportName) {    // check if we have really a basketball event
            this.name = Sport._createName(se, Basketball._delimiter);   // use proper delimiter
            this.score = Basketball._basketballScore(se.score);         // use basketball-type score string
        } else {
            this.score = this.name = Sport._exceptionString;
            throw new Error("Wrong sport name");                        // throw exception if it is not a basketball event
        }
    }
}
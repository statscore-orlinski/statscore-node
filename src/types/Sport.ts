import { SportEvent } from "./SportEvent";

// Generic sport class
export class Sport {
    static _exceptionString : string = "Exception: invalid sport";  // What do we write in name when something is wrong
    static _exceptionScore : string = "Exception: invalid score";   // What do we write in score when something is wrong

    static _createName(se : SportEvent, delimiter : string) : string {
        return se.participant1 + delimiter + se.participant2;       // We combine participants to string - common function for all inheritants
    }

    static _scoreWithSets(_score : string) : string {               // Score string function for set-based games (volleyball, tennis)
        const scores = /([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/.exec(_score);      // we use proven regexp
        if (scores != null && scores.length > 4) {                                                              // when we get proper results
            return `Main score: ${scores![1]} (set1 ${scores![2]}, set2 ${scores![3]}, set3 ${scores![4]})`;    // we return score string
        } else {
            return Sport._exceptionScore;
        }
    }

    name : string = "name"; // public property with game name
    score : string = "score";   // public property with score

    constructor(se : SportEvent | null) {   // empty constructor

    }
}
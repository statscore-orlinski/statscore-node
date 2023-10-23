import { Sport } from "./Sport"
import { SportEvent } from "./SportEvent"
import { Basketball } from "./Basketball"
import { Soccer } from "./Soccer"
import { Volleyball } from "./Volleyball"
import { Handball } from "./Handball"
import { Tennis } from "./Tennis"

// SportBuilder class, 
export class SportBuilder {

    static build(se : SportEvent) : Sport {     // builds Sport-inherited class from SportEvent
        switch (se.sport) {     // checking which sport is in the event
            case Soccer._sportName : return new Soccer(se);     // return new soccer object
            case Handball._sportName: return new Handball(se);  // ...
            case Volleyball._sportName: return new Volleyball(se);
            case Basketball._sportName: return new Basketball(se);
            case Tennis._sportName: return new Tennis(se);
            default: throw new Error("Unrecognized sport");     // if sport is not recognized
        }
    }
}
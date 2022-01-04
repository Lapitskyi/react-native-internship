import {ICharacter, IInfo} from "./ICharacter";

export interface IEpisode extends IInfo{
    results: [
        {
            "id":  number,
            "name": string,
            "air_date": string,
            "episode": string,
            "characters": any [],
            "url": string,
            "created": string
        }
    ]
}

interface ICharacters {

}

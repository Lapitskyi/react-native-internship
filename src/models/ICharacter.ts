export interface ICharacter {
    info: IInfo,
    results:IResult
}

export interface IInfo {
    count:number,
    pages:number,
    next: string,
    prev: string | null
}
interface IResult {
    "id": number,
    "name": string,
    "type": string,
    "dimension": string,
    "residents": string[]
}

interface IResidents {

}


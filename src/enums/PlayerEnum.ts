export enum PlayerEnum
{
    Human = 1
}

export class MapNumberToPlayerEnum
{
    static Get(input: number): PlayerEnum
    {
        switch(input)
        {
            case 1: return PlayerEnum.Human;
            default: throw "Invalid input to PlayerEnum"
        }
    }
}
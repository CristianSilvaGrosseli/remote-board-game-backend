import Player from './Player';

export default class Human extends Player
{
    constructor(name: string, id?: string)
    {
        super(name, id);
        console.info("Human: Human instancied: " + this.GetId());
    }
}
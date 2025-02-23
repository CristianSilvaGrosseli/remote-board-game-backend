import StandardGame from "./StandardGame";

export default class PongHauKi extends StandardGame
{
    constructor()
    {
        super();
        console.info("PongHauKi: PongHauKi instancied: " + this.GetInstanceId());
    }
}
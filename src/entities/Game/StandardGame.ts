import Game from "./Game";

export default abstract class StandardGame extends Game
{
    constructor()
    {
        super("");
        console.info("StandarddGame: StandardGame instancied: " + this.GetInstanceId());
    }
}
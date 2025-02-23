import Game from "../entities/Game/Game";
import PongHauKi from "../entities/Game/PongHauKi";
import StandardGame from "../entities/Game/StandardGame";

export default class GameFactory
{
    static CreateInstance(gameId: string): Game
    {
        return new PongHauKi();
    }
}
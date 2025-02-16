import Player from "../entities/Player/Player";
import Human from "../entities/Player/Human";
import { PlayerEnum } from "../enums/PlayerEnum";

export default class PlayerFactory
{
    static CreateInstance(playerType: PlayerEnum, name: string, playerId?: string): Player
    {
        if (playerType == PlayerEnum.Human)
        {
            return new Human(name, playerId);
        }
        throw "Invalid player type";
    }
}
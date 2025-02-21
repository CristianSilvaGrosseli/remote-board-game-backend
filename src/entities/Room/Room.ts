import ActivePlayersSingletonMap from "../../singletons/ActivePlayersSingleton";
import Player from "../Player/Player";
import Game from "../Game/Game";
import GameFactory from "../../factories/GameFactory";
import { v4 as uuidv4 } from 'uuid';

export default class Room
{
    private mRoomId: string;
    private mPlayers: Set<string> = new Set<string>();
    private mGameAssociatedId: string;

    constructor(gameAssociatedId: string, roomId?: string)
    {
        this.mRoomId = roomId ?? uuidv4();
        this.mGameAssociatedId = gameAssociatedId;
        console.info("Room: Room instancied: " + this.GetId());
    }

    public GetId(): string
    {
        return this.mRoomId;
    }

    public AddPlayer(playerId: string): void
    {
        const activePlayersMap: ActivePlayersSingletonMap<String, Player> = ActivePlayersSingletonMap.getInstance();
        if (!activePlayersMap.has(playerId))
        {
            throw "There is no active player with id " + playerId;
        }

        this.mPlayers.add(playerId);
        const player: Player = activePlayersMap.get(playerId);
        player.SetAssociatedRoom(this.mRoomId);
        console.info("Room: Room: " + this.mRoomId + " added player " + playerId);
    }

    public InitializeGameInstance(): void
    {
        const newGameInstance: Game = GameFactory.CreateInstance(this.mGameAssociatedId);
    }
}
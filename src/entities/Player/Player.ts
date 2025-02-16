import { v4 as uuidv4 } from 'uuid';

export default abstract class Player
{
    mPlayerId: string;
    mName: string;
    mAssociatedRoom: string

    constructor(name: string, playerId?: string)
    {
        this.mPlayerId = playerId ?? uuidv4();
        this.mName = name;
        console.info("Player: Player instancied: " + this.mPlayerId);
    }

    public GetId(): string
    {
        return this.mPlayerId;
    }

    public GetName(): string
    {
        return this.mName;
    }

    public SetAssociatedRoom(roomId: string): void
    {
        this.mAssociatedRoom = roomId;
        console.info("Player: player " + this.mPlayerId + " was associated to room " + roomId);
    }
}



import { v4 as uuidv4 } from 'uuid';

export default abstract class Game
{
    private mInstanceId: string;

    constructor(instanceId?: string)
    {
        this.mInstanceId = instanceId ?? uuidv4();
        console.info("Game: Game instancied: " + this.GetInstanceId());
    }

    public GetInstanceId(): string
    {
        return this.mInstanceId;
    }
}
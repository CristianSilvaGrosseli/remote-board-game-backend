export default class ActiveRoomsSingletonMap<String, Room> extends Map<String, Room>
{
    private static instance: ActiveRoomsSingletonMap<any, any>;

    private constructor() { super(); }

    public static getInstance<String, Room>(): ActiveRoomsSingletonMap<String, Room>
    {
        if (!ActiveRoomsSingletonMap.instance) {
            ActiveRoomsSingletonMap.instance = new ActiveRoomsSingletonMap<String, Room>();
        }
        return ActiveRoomsSingletonMap.instance as ActiveRoomsSingletonMap<String, Room>;
    }
}
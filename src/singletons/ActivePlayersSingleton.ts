export default class ActivePlayersSingletonMap<String, Player> extends Map<String, Player>
{
    private static instance: ActivePlayersSingletonMap<any, any>;

    private constructor() { super(); }

    public static getInstance<String, Player>(): ActivePlayersSingletonMap<String, Player>
    {
        if (!ActivePlayersSingletonMap.instance) {
            ActivePlayersSingletonMap.instance = new ActivePlayersSingletonMap<String, Player>();
        }
        return ActivePlayersSingletonMap.instance as ActivePlayersSingletonMap<String, Player>;
    }
}
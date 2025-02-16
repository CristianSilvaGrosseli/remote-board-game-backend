import express, { Request, Response, Router } from "express";
import Player from "../entities/Player/Player";
import PlayerFactory from "../factories/PlayerFactory";
import { PlayerEnum, MapNumberToPlayerEnum } from "../enums/PlayerEnum";
import ActivePlayersSingletonMap from "../singletons/ActivePlayersSingleton";

const router = express.Router();

export const PostPlayer= async (req: Request, res: Response) => {
    console.info("PostPlayer invoked");
    const playerName: string = req.body.name;
    const playerType: PlayerEnum = MapNumberToPlayerEnum.Get(req.body.type);
    const newPlayer: Player = PlayerFactory.CreateInstance(playerType, playerName);
    ActivePlayersSingletonMap.getInstance().set(newPlayer.GetId(), newPlayer);
    res.status(200).json({ id: newPlayer.GetId() });
}

export default Router;
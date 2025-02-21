import express, { Request, Response, Router } from "express";
import Room from "../entities/Room/Room";
import ActiveRoomsSingletonMap from "../singletons/ActiveRoomsSingleton";

const router = express.Router();

export const PostRoom = async (req: Request, res: Response) => {
    console.info("PostRoom invoked");
    const gameAssociatedId = req.body.gameAssociatedId;
    const newRoom: Room = new Room(gameAssociatedId);
    ActiveRoomsSingletonMap.getInstance().set(newRoom.GetId(), newRoom);
    res.status(200).json({ id: newRoom.GetId() });
}

export const AddPlayerToRoom = async (req: Request, res: Response) => {
    console.info("AddPlayerToRoom invoked");
    const roomId = req.body.roomId;
    const playerId = req.body.playerId;

    const activeRoomsMap: ActiveRoomsSingletonMap<String, Room> = ActiveRoomsSingletonMap.getInstance();
    const room: Room = activeRoomsMap.get(roomId);
    room.AddPlayer(playerId);
    res.status(200).json({ id: "" });
}

export const InitializeGameInstance = async (req: Request, res: Response) => {
    console.info("InitializeGameInstance invoked");
    const roomId = req.body.roomId;
    const activeRoomsMap: ActiveRoomsSingletonMap<String, Room> = ActiveRoomsSingletonMap.getInstance();
    const room: Room = activeRoomsMap.get(roomId);
    room.InitializeGameInstance();
    res.status(200).json({ id: "" });
}

export default Router;
import express, { Request, Response } from 'express';
import { PostRoom , AddPlayerToRoom, InitializeGameInstance } from '../controllers/RoomController';

const router = express.Router();

router.post('/createRoom', PostRoom);
router.post('/addPlayer', AddPlayerToRoom);
router.post('/initGame', InitializeGameInstance);

export default router;
import express, { Request, Response } from 'express';
import { PostPlayer } from '../controllers/PlayerController';
const router = express.Router();

router.post('/createPlayer', PostPlayer);

export default router;
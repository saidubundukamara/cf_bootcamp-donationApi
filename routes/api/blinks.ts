import express from "express";
import cors from 'cors';
import * as controller from "../../app/controllers/blinks";

const router = express.Router();

const corsOptions = {
  origin: '*',
  methods: 'GET,POST',
  allowedHeaders: ['Content-Type', 'Authorization']
};

router.get('/:id', cors(corsOptions), controller.getBlink)

router.post('/:id', cors(corsOptions), controller.donate)

export default router
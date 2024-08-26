import express from "express";
import * as controller from "../../app/controllers/blinks";

const router = express.Router();

router.get('/:id', controller.getBlink)

router.post('/:id', controller.donate)

export default router
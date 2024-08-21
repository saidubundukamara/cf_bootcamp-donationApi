import express from "express";
import * as controllers from "../../app/controllers/donations";
const router = express.Router();

router.get('/', controllers.getAllDonation);
router.get('/:id', controllers.getDonationById);
router.post('/', controllers.createDonation);
router.put('/:id', controllers.updateDonation);
router.delete('/:id', controllers.deleteDonation);

export default router



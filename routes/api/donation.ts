import express from "express";
import DonationController from "../../app/controllers/donations";
const controller = new DonationController();
const router = express.Router();

router.get('/', controller.getAllDonation);
router.get('/:id', controller.getDonationById);
router.post('/', controller.createDonation);
router.put('/:id', controller.updateDonation);
router.delete('/:id', controller.deleteDonation);

export default router



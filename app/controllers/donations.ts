import DonationService from "../services/donation_service";
const service = new DonationService();

class DonationController {

    /**
     * Creates a new donation.
     *
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @return {Promise<Object>} A promise that resolves with the created donation.
     */
    async createDonation(req, res) {
        const body = req.body
        
        try {
            const donation = await service.createDonation(body)
            res.status(201).json(donation)
        } catch (error) {
            res.status(500).json(error)
        }
    }


    /**
     * Retrieves all donations from the service and returns them in the response.
     *
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @return {Promise<void>} A promise that resolves when the response is sent.
     */
    async getAllDonation(req, res) {
        try {
            const donations = await service.getAllDonation()
            res.status(200).json(donations)
        } catch (error) {
            res.status(500).json(error)
        }
    }


    /**
     * Retrieves a donation by its ID.
     *
     * @param {Object} req - The request object containing the donation ID as a parameter.
     * @param {Object} res - The response object used to send the retrieved donation or an error.
     * @return {Promise<Object>} A promise that resolves with the retrieved donation or an error.
     */
    async getDonationById(req, res) {
        const id = req.params.id

        try {
            const donation = await service.getDonationById(id)
            return res.status(200).json(donation)
        } catch (error) {
            res.status(500).json(error)
        }
    }


    /**
     * Updates a donation by its ID.
     *
     * @param {Object} req - The request object containing the donation ID as a parameter and the updated donation data in the body.
     * @param {Object} res - The response object used to send the result of the update operation.
     * @return {Promise<Object>} A promise that resolves with the result of the update operation.
     */
    async updateDonation(req, res) {
        const id = req.params.id
        const body = req.body

        try {
            await service.updateDonation(id, body)
            return res.status(200).json({message: 'Donation updated'})
        } catch (error) {
            res.status(500).json(error)
        }
    }
    

    /**
     * Deletes a donation by its ID.
     *
     * @param {Object} req - The request object containing the donation ID as a parameter.
     * @param {Object} res - The response object used to send the result of the deletion operation.
     * @return {Promise<Object>} A promise that resolves with the result of the deletion operation.
     */
    async deleteDonation(req, res) {
        const id = req.params.id

        try {
            await service.deleteDonation(id)
            return res.status(200).json({message: 'Donation deleted'})
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default DonationController
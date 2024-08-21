import DonationRepository from "../repositories/donation_repo";
const repo = new DonationRepository();

class DonationService {

    /**
     * Creates a new donation.
     *
     * @param {Object} data - The data for the new donation.
     * @return {Promise<Object>} A promise that resolves with the created donation.
     */
    async createDonation(data) {
        return await repo.createDonation(data)
    }

    
    /**
     * Retrieves a list of all donations.
     *
     * @return {Promise<Array<Object>>} A promise that resolves with a list of all donations.
     */
    async getAllDonation() {
        return await repo.getAllDonation()
    }

    
    /**
     * Retrieves a donation by its ID.
     *
     * @param {string} id - The ID of the donation to retrieve.
     * @return {Object} The retrieved donation.
     */
    async getDonationById(id) {
        const donation = await repo.getDonationById(id)
        if(!donation) throw new Error('Donation not found')
        return donation;
    }

    
    /**
     * Updates a donation by its ID.
     *
     * @param {string} id - The ID of the donation to be updated.
     * @param {object} data - The updated data for the donation.
     * @return {Promise<object>} A promise that resolves with the updated donation.
     */
    async updateDonation(id, data) {
        const donation = await repo.updateDonation(id, data)
        if(!donation) throw new Error('Donation not found')
    }

    
    /**
     * Deletes a donation by its ID.
     *
     * @param {string} id - The ID of the donation to be deleted.
     * @return {Promise<object>} A promise that resolves with the deleted donation.
     */
    async deleteDonation(id) {
        const donation = await repo.deleteDonation(id)
        if(!donation) throw new Error('Donation not found')
        
    }
}

export default DonationService
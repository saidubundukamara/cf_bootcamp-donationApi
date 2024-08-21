import Donation from '../models/donation_model'

class DonationRepository {
    
    /**
     * Creates a new donation based on the provided data.
     *
     * @param {object} data - The data used to create the new donation.
     * @return {Promise} A promise that resolves with the saved donation.
     */
    async createDonation(data){
        const newDonation = new Donation(data);
        return newDonation.save();
    }
    
    
    /**
     * Retrieves a list of all donations.
     *
     * @return {Promise} A promise that resolves with a list of all donations.
     */
    async getAllDonation(){
        return await Donation.find()
    }
    
    /**
     * Retrieves a donation by its ID.
     *
     * @param {string} id - The ID of the donation to be retrieved.
     * @return {Promise<object>} A promise that resolves with the retrieved donation.
     */
    async getDonationById(id){
        return await Donation.findById(id)
    }
    
    
    /**
     * Updates a donation by its ID.
     *
     * @param {string} id - The ID of the donation to be updated.
     * @param {object} data - The updated data for the donation.
     * @return {Promise<object>} A promise that resolves with the updated donation.
     */
    async updateDonation(id, data){
        return await Donation.findByIdAndUpdate(id, data)
    }
    
    
    /**
     * Deletes a donation by its ID.
     *
     * @param {string} id - The ID of the donation to be deleted.
     * @return {Promise<object>} A promise that resolves with the deleted donation.
     */
    async deleteDonation(id){  
        return await Donation.findByIdAndDelete(id)
    }

}

export default DonationRepository
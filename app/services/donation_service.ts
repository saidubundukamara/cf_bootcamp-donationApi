import * as repo from "../repositories/donation_repo";

/**
 * Creates a new donation.
 *
 * @param {Object} data - The data for the new donation.
 * @return {Promise<Object>} A promise that resolves with the created donation.
 */
export async function createDonation(data) {
  return await repo.storeDonation(data);
}

/**
 * Retrieves a list of all donations.
 *
 * @return {Promise<Array<Object>>} A promise that resolves with a list of all donations.
 */
export async function getAllDonation() {
  return await repo.fetchAllDonation();
}

/**
 * Retrieves a donation by its ID.
 *
 * @param {string} id - The ID of the donation to retrieve.
 * @return {Object} The retrieved donation.
 */
export async function getDonationById(id) {
  const donation = await repo.fetchDonationById(id);
  if (!donation) throw new Error("Donation not found");
  return donation;
}

/**
 * Updates a donation by its ID.
 *
 * @param {string} id - The ID of the donation to be updated.
 * @param {object} data - The updated data for the donation.
 * @return {Promise<object>} A promise that resolves with the updated donation.
 */
export async function updateDonation(id, data) {
  const donation = await repo.updateDonation(id, data);
  if (!donation) throw new Error("Donation not found");
}

/**
 * Deletes a donation by its ID.
 *
 * @param {string} id - The ID of the donation to be deleted.
 * @return {Promise<object>} A promise that resolves with the deleted donation.
 */
export async function deleteDonation(id) {
  const donation = await repo.deleteDonation(id);
  if (!donation) throw new Error("Donation not found");
}

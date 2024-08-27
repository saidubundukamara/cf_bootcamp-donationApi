import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image: {
        type: String,
    }
});

const Donation = mongoose.model('Donation', donationSchema)

export default Donation
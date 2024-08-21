import express from "express";
import mongoose from "mongoose";
import donationRouter from "./routes/api/donation";
import "dotenv/config";

const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MongoDB || '';

const app = express();

//connect to mongodb
mongoose.connect(MONGODB_URL).then(() => {
    console.log('Connected to MongoDB');
})

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello sure!');
});

app.use('/api/donations', donationRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

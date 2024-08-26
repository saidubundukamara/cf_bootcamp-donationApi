import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const path = require('path');
import donationRouter from "./routes/api/donation";
import blinksRouter from "./routes/api/blinks";

import "dotenv/config";

const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MongoDB || '';

const app = express();

//connect to mongodb
mongoose.connect(MONGODB_URL).then(() => {
    console.log('Connected to MongoDB');
})

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('*', cors());

app.use(express.json());


app.use(
    '/actions.json',
    express.static(path.join(__dirname, 'actions.json'))
);
  
app.get('/actions.json', (req, res) => {
res.sendFile(path.join(__dirname, 'actions.json'));
});

app.use('/api/donations', donationRouter);
app.use('/api/donation', blinksRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

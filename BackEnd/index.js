import express from 'express';
import mongoose from 'mongoose';
import { PORT , mongoDBURL} from './config.js';
// import {Book} from './models/bookModels.js';
import BookRoutes from './routes/BookRoutes.js';
import cors from 'cors';

const app = express();



app.use(express.json());

app.use(cors({origin: true, credentials: true}));

app.get('/', (req, res) => { 
    res.send("Welcome Back Chief!");
});


app.use('/books', BookRoutes);


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Connected");
        app.listen(PORT,() => {
            console.log(`App listening on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log(`Failed to connect to port ${err.message}`);
    })
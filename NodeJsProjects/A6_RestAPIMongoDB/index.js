import dotenv from 'dotenv';
import express from 'express';
import {connectDB} from './configs/connection.js'
import {routes} from './routes/userRoutes.js'

dotenv.config();
const app = express();

// middleware to handle json data parsed by req.bidy
app.use(express.json());

// Connecting my server with mongoDB
connectDB(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Some Error Occured While Connecting to Database"))

// sending routes to handle 
app.use('/api/users', routes);

app.listen(8000, () => console.log("Server Started"));
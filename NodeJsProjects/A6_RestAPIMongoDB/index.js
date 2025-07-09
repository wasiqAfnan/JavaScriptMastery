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

// Catch all invalid routes starting with /api/*
// latest version of express (5.1.0) have issue with '*' route
// app.all('/api/:splat',(req, res) => {
//     res.status(404).json(
//         {
//             message: "Invalid path. Go to /api/users to get all users"
//         }
//     )
// })

// Catch all other invalid routes (including '/')
// In Express 5.x, the '*' path does not behave the same as previous versions. '/.*/'
// is a regex that correctly matches any route, including '/', '/about', '/api', etc., 
// making it a reliable fallback

app.all(/.*/, (req, res) => {
    res.status(404).json({
        message: "Invalid path. Go to /api/users to get all users"
    });
});

app.listen(8000, () => console.log("Server Started"));
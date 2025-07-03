const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// middlewares
app.use(express.json());

// Connecting my server with mongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Some Error Occured While Connecting to Database"))

// Schema for mongoDB
const userSchema = mongoose.Schema({
    uName: {
        type: String,
        required: true,
    },
    uEmail: {
        type: String,
        required: true,
        unique: true
    },
    uAge: String
}, { timestamps: true });

// Creating model using schema
const Users = mongoose.model("Users", userSchema);

app.route('/api/users')
    .get(async(req, res) => {
        let userData = await Users.find();
        res.status(200).json(userData);
    })
    .post(async (req, res)=>{
        const {name, email, age} = req.body;
        if(name && email){
            const newUser = {
                uName: name,
                uEmail: email                
            }
        if (age != undefined) newUser.uAge = age;

        // create and save to db
        const details = await Users.create(newUser);

        res.status(201).json({message: "Created Successfully", id: `${details._id}`});
        }
        else{
            res.status(400).json({message: "Name or Email Missing"});
        }
    })

app.listen(8000, () => console.log("Server Started"));
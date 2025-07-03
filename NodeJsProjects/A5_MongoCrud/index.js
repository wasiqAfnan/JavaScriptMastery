const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// middleware to handle json data parsed by req.bidy
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
    .get(async (req, res) => {
        let userData = await Users.find();
        res.status(200).json(userData);
    })
    .post(async (req, res) => {
        const { name, email, age } = req.body;
        if (name && email) {
            const newUser = {
                uName: name,
                uEmail: email
            }
            if (age != undefined) newUser.uAge = age;

            // create and save to db
            const details = await Users.create(newUser);

            res.status(201).json({ message: "Created Successfully", id: `${details._id}` });
        }
        else {
            res.status(400).json({ message: "Name or Email Missing" });
        }
    })

app.route('/api/users/:id')
    .get(async (req, res) => {
        const id = req.params.id;
        const user = await Users.findById(id);
        user ? res.status(200).json(user) : res.status(404).json({ message: "No user Found" })
    })
    .patch(async (req, res) => {
        const id = req.params.id;
        const { name, email, age } = req.body;

        const newData = {}
        if (name) newData.uName = name;
        if (email) newData.uEmail = email;
        if (age) newData.uAge = age;

        // {new: true} returns the updated document
        const user = await Users.findByIdAndUpdate(id, newData, { new: true });
        user ? res.status(200).json(user) : res.status(404).json({ message: "No user Found" })
    })

    .delete(async (req, res) => {
        const id = req.params.id;
        const user = await Users.findByIdAndDelete(id);
        user ? res.status(200).json({ message: `Deleted succesfull with id ${user._id}` }) : res.status(404).json({ message: "No user Found" })
    })

app.listen(8000, () => console.log("Server Started"));
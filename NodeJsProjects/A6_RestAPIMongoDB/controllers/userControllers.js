import { Users } from '../models/usermodels.js'

const handleGetAllUsers = async (req, res) => {
    let userData = await Users.find();
    res.status(200).json(userData);
}

const handleGetUserById = async (req, res) => {
    const id = req.params.id;
    const user = await Users.findById(id);
    user ? res.status(200).json(user) : res.status(404).json({ message: "No user Found" })
}

const handleUpdateUserById = async (req, res) => {
    const id = req.params.id;
    const { name, email, age } = req.body;

    const newData = {}
    if (name) newData.uName = name;
    if (email) newData.uEmail = email;
    if (age) newData.uAge = age;

    // {new: true} returns the updated document
    const user = await Users.findByIdAndUpdate(id, newData, { new: true });
    user ? res.status(200).json(user) : res.status(404).json({ message: "No user Found" })
}

const handleDeleteUserById = async (req, res) => {
    const id = req.params.id;
    const user = await Users.findByIdAndDelete(id);
    user ? res.status(200).json({ message: `Deleted succesfull with id ${user._id}` }) : res.status(404).json({ message: "No user Found" })
}

const handleCreateNewUser = async (req, res) => {
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
}

export {
    handleGetAllUsers,
    handleCreateNewUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById
}
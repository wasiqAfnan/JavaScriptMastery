const express = require('express');
const
    {
        handleGetAllUsers,
        handleCreateNewUser,
        handleGetUserById,
        handleUpdateUserById,
        handleDeleteUserById
    } = require('../controllers/userControllers')

const routes = express.Router();

routes.route('/')
    .get(handleGetAllUsers)
    .post(handleCreateNewUser)

routes.route('/:id')
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)


module.exports = {
    routes
}
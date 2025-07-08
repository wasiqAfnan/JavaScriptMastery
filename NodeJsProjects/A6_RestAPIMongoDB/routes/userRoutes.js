import express from 'express';

import
    {
        handleGetAllUsers,
        handleCreateNewUser,
        handleGetUserById,
        handleUpdateUserById,
        handleDeleteUserById
    } from '../controllers/userControllers.js'

const routes = express.Router();

routes.route('/')
    .get(handleGetAllUsers)
    .post(handleCreateNewUser)

routes.route('/:id')
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)


export {
    routes
}
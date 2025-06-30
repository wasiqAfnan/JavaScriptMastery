const express = require('express');
const fs = require('fs')
let userData = require('./data.json');
const path = "data.json"
const app = express();
let max = -1;

app.use(express.urlencoded({ extended: false }));
/*
app.get('/api/users', (req, res) => {
    res.json(userData);
})

app.post('/api/users', (req, res) => {
    if (!req.body.name || !req.body.email) {
        res.status(400).json({ "Message": "Name or Email missing" });
    }
    else {
        if (userData.length > 0) {
            // getting the maximum index value of the current records
            max = Math.max(...userData.map(data => data.id))
        }
        let index = max + 1; // seeting index value for newly data to be inserted

        // creating user object with data passed by user
        let user = {
            "id": index,
            "name": req.body.name,
            "email": req.body.email,
        }
        // Adding age if passed by the user
        if (req.body.age) user.age = req.body.age;

        // pushing the newly created object to the remaining one
        userData.push(user);

        // writing the data to the file
        fs.writeFile(path, JSON.stringify(userData), (err) => { console.log(err) });

        // sending response to the user with id
        res.status(201).json({ Message: "Successful", id: index });
    }
})
*/

// merging these two request in one since both get and post request share same url
app.route('/api/users')
    .get((req, res) => {
        res.json(userData)
    })
    .post(
        (req, res) => {
            if (!req.body.name || !req.body.email) {
                res.status(400).json({ "Message": "Name or Email missing" });
            }
            else {
                if (userData.length > 0) {
                    // getting the maximum index value of the current records
                    max = Math.max(...userData.map(data => data.id))
                }
                let index = max + 1; // seeting index value for newly data to be inserted

                // creating user object with data passed by user
                let user = {
                    "id": index,
                    "name": req.body.name,
                    "email": req.body.email,
                }
                // Adding age if passed by the user
                if (req.body.age) user.age = req.body.age;

                // pushing the newly created object to the remaining one
                userData.push(user);

                // writing the data to the file
                fs.writeFile(path, JSON.stringify(userData), (err) => { console.log(err) });

                // sending response to the user with id
                res.status(201).json({ Message: "Successful", id: index });
            }
        })


app.listen(8000, () => { console.log("Server Started") });
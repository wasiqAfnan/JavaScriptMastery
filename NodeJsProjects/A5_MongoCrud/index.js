const express = require('express');
require('dotenv').config();

const app = express();

app.listen(8000, () => console.log("Server Started"));
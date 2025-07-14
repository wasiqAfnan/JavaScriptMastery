import app from "./app.js";
import constants from "./constants.js";
import connectDb from "./db/config.js";

const port = constants.PORT || 5000;

// connectiong to DB
connectDb().then(
    // starting the server only if DB connection has been established
    app.listen(port, () => {
        console.log(`Server is running. URL: http://localhost:${port}`);
    })
);

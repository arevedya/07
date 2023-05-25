const express = require("express");
const app = express()
const response = [
    {
        name: "Nishant",
        email: "Nishant@gmail.com"
    },
    {
        name: "Umesh",
        email: "umesh@gmail.com"
    },
    {
        name: "ashwin",
        email: "ashwin@gmail.com"
    },
];

app.get("/users", (req, res) => {
    res.json(response);
})

app.listen(5011, () => {
    console.log("listening on port 5011");
})


// npm i
// npm i express
// npm i -g nodemon
// nodemon index
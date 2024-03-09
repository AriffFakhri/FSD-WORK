const express = require("express");
const app = express();

app.get("/", (req, res) => {
    // Sending a JSON response with an array of dummy data
    res.json([
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com"
        },
        {
            id: 2,
            name: "ariff",
            email: "ariff@gmail.com"
        },
        {
            id: 3,
            name: "johnny",
            email: "john@gmail.com"
        }
    ]);
});

app.listen(5000, () => {
    console.log("App is running on port 5000");
});
